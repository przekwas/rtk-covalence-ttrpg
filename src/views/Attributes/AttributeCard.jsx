import { useSelector, useDispatch } from 'react-redux';
import { increase, descrease } from '../../features/attributes/attributesSlice';
import { increaseSkill, decreaseSkill } from '../../features/skills/skillsSlice';
import { Toast } from '../../components';

const AttributeCard = ({ type, Icon, description }) => {
	const dispatch = useDispatch();
	const attrScore = useSelector(state => state.attributes[type]);
	const linked = useSelector(state => state.skills[type]);
	const currentAttrPoints = useSelector(state => state.attributes.points.current);
	const currentSkillPoints = useSelector(state => state.skills.points.current);

	const handleAttrClick = actionType => {
		if (currentAttrPoints === 0 && actionType === 'increase') {
			Toast.error('Out of attribute points!');
			return;
		}

		if (actionType === 'increase') {
			dispatch(increase(type));
		} else {
			dispatch(descrease(type));
		}
	};

	const handleSkillClick = ({ actionType, ...rest }) => {
		if (currentSkillPoints === 0 && actionType === 'increase') {
			Toast.error('Out of skill points!');
			return;
		}

		if (actionType === 'increase') {
			dispatch(increaseSkill({ ...rest }));
		} else {
			dispatch(decreaseSkill({ ...rest }));
		}
	};

	return (
		<div className="w-full my-2 overflow-hidden md:w-1/3 md:my-3 md:px-3">
			<div className="h-full shadow-xl card bg-secondary text-secondary-content">
				<div className="card-body">
					<h2 className="flex items-center justify-between card-title">
						<span className="font-mono text-2xl md:text-4xl">
							{type[0].toUpperCase() + type.slice(1)}
						</span>
						<Icon className="p-1 text-6xl rounded-lg bg-info text-info-content" />
					</h2>
					<div className="text-sm text-secondary-content">{description}</div>
					<div className="flex items-center justify-between">
						<div className="w-1/3">
							<span className="font-mono text-4xl font-extrabold">{attrScore}</span>
						</div>
						<div className="flex items-center justify-end w-2/3">
							<button
								className={`mr-4 btn btn-circle btn-error ${
									attrScore === 1 && 'btn-disabled'
								}`}
								onClick={() => handleAttrClick('decrease')}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									fill="currentColor"
									className="bi bi-dash-lg"
									viewBox="0 0 16 16">
									<path
										fillRule="evenodd"
										d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
									/>
								</svg>
							</button>
							<button
								className={`btn btn-circle btn-success ${
									attrScore === 20 && 'btn-disabled'
								}`}
								onClick={() => handleAttrClick('increase')}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									fill="currentColor"
									className="bi bi-plus-lg"
									viewBox="0 0 16 16">
									<path
										fillRule="evenodd"
										d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="font-mono divider">Linked Skills</div>
					<div>
						{linked &&
							Object.keys(linked.skills).map(key => (
								<div key={key} className="flex items-center justify-between">
									<div className="flex items-center justify-between my-2">
										<span className="mr-2 font-mono text-3xl">
											{linked.skills[key].points.current}
										</span>
										<span className="text-sm font-light tracking-wider">
											{linked.skills[key].display}
										</span>
									</div>
									<div className="flex items-center justify-between w-1/4">
										<button
											onClick={() =>
												handleSkillClick({
													actionType: 'decrease',
													skill: key,
													attr: type
												})
											}
											className={`btn btn-square btn-sm btn-accent ${
												linked.skills[key].points.current === 1 &&
												'btn-disabled'
											}`}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												className="bi bi-dash-lg"
												viewBox="0 0 16 16">
												<path
													fillRule="evenodd"
													d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
												/>
											</svg>
										</button>
										<button
											onClick={() =>
												handleSkillClick({
													actionType: 'increase',
													skill: key,
													attr: type
												})
											}
											className={`btn btn-square btn-sm btn-primary ${
												linked.skills[key].points.current === 10 &&
												'btn-disabled'
											}`}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												className="bi bi-plus-lg"
												viewBox="0 0 16 16">
												<path
													fillRule="evenodd"
													d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
												/>
											</svg>
										</button>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AttributeCard;
