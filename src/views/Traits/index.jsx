import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTrait, refundTrait } from '../../features/traits/traitsSlice';

import { Toast } from '../../components';
import { GiSave, GiCancel } from 'react-icons/gi';

import { traitsArray } from '../../assets/traits';
import { skillsMap } from '../../assets/keyMaps';

const Traits = () => {
	const dispatch = useDispatch();
	const traitsCurrent = useSelector(state => state.traits.points.current);
	const selectedTraits = useSelector(state => state.traits.selected);
	const attributes = useSelector(state => state.attributes);

	const [filter, setFilter] = useState('none');
	const handleFilterChange = e => setFilter(e.target.value);

	const generateOptions = () => {
		return Object.keys(skillsMap).map(key => {
			switch (skillsMap[key].name) {
				default:
					return {
						display:
							skillsMap[key].name.slice(0, 1).toUpperCase() +
							skillsMap[key].name.slice(1),
						key: skillsMap[key].name
					};
			}
		});
	};

	const handleFilters = () => {
		if (filter === 'none') return traitsArray;

		const filtered = traitsArray.filter(trait => {
			if (trait.bonuses.length) {
				for (const bonus of trait.bonuses) {
					if (filter === bonus.pair.name && Math.sign(bonus.value) !== -1) {
						return trait;
					}
				}
			}
			return false;
		});

		return filtered;
	};

	const handleSaveClick = clickedTrait => {
		if (traitsCurrent === 0) {
			Toast.error('Out of trait points!');
			return;
		}

		if (clickedTrait.requirements.length) {
			const currentAttrScore = attributes[clickedTrait.requirements[0].pair];
			const requirement = clickedTrait.requirements[0].value;
			if (currentAttrScore !== requirement) {
				Toast.error('Required stats not met!');
				return;
			}
		}

		Toast.success('Trait saved!');
		dispatch(selectTrait(clickedTrait));
	};

	const handleRemoveClick = clickedTrait => {
		Toast.warning('Trait removed!');
		dispatch(refundTrait(clickedTrait.id));
	};

	const checkIfSelected = traitId => {
		const selected = selectedTraits.find(selectedTrait => selectedTrait.id === traitId);
		return selected ? true : false;
	};

	return (
		<div className="container mx-auto mt-20 mb-5">
			<div className="mb-5 text-4xl font-extrabold text-center" id="game-text">
				Traits
			</div>
			<div className="font-mono divider">Filters</div>
			<section className="w-full px-4 mx-auto lg:w-1/4">
				<select
					className="w-full select select-bordered"
					value={filter}
					onChange={handleFilterChange}>
					<option value="none">No Filter</option>
					{generateOptions().map(option => (
						<option key={option.key} value={option.key}>
							{option.display}
						</option>
					))}
				</select>
			</section>
			<div className="divider"></div>
			<section className="flex flex-wrap items-stretch justify-center w-full overflow-hidden md:-mx-3">
				{handleFilters().map(trait => (
					<div
						key={trait.id}
						className="w-full my-2 overflow-hidden md:w-1/3 md:my-3 md:px-3">
						<div className="relative shadow-xl card bg-secondary text-secondary-content">
							{checkIfSelected(trait.id) ? (
								<div
									className="absolute text-4xl right-5 top-3 btn btn-ghost"
									onClick={() => handleRemoveClick(trait)}>
									<GiCancel />
								</div>
							) : (
								<div
									className="absolute text-4xl right-5 top-3 btn btn-ghost"
									onClick={() => handleSaveClick(trait)}>
									<GiSave />
								</div>
							)}

							<div className="card-body">
								<div className="font-mono card-title">{trait.name}</div>
								<div>{trait.description}</div>
								<div className="flex flex-wrap items-center justify-start -mx-1">
									{trait.bonuses.length > 0 && (
										<>
											{trait.bonuses.map((bonus, idx) => (
												<div
													key={`trait-${trait.id}-bonus-${idx}`}
													className="px-1 mb-1">
													<div
														className={`badge badge-lg ${
															Math.sign(bonus.value) === -1
																? 'badge-error'
																: 'badge-success'
														}`}>
														{bonus.display}
													</div>
												</div>
											))}
										</>
									)}
								</div>
								{trait.requirements.length > 0 && (
									<>
										<div className="font-mono divider text-error">
											requirements
										</div>
										<div className="flex flex-wrap items-center justify-start -mx-1">
											{trait.requirements.map(requirement => (
												<div
													key={`trait-${trait.id}-requirement-${requirement.key}`}
													className="px-1 mb-1">
													<div className="badge badge-primary badge-lg">
														{requirement.value} {requirement.display}
													</div>
												</div>
											))}
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default Traits;
