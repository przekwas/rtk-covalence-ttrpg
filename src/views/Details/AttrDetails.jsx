import { useSelector } from 'react-redux';

const AttributeDetails = ({ type }) => {
	const attrScore = useSelector(state => state.attributes[type]);
	const attrBonus = useSelector(state => state.traits.attributeBonuses[type]);

	const linked = useSelector(state => state.skills[type]);
	const skillBonus = useSelector(state => state.traits.skillBonuses);

	const calculateAttrScore = () => {
		const bonus = attrBonus ? attrBonus.value : 0;
		return attrScore + bonus;
	};

	const calculateSkillScore = (currentScore, skillName) => {
		const bonus = skillBonus[skillName] ? skillBonus[skillName].value : 0;
		return currentScore + bonus;
	};

	return (
		<div className="w-full my-2 overflow-hidden md:w-1/3 md:my-3 md:px-3">
			<div className="h-full shadow-xl card bg-secondary text-secondary-content">
				<div className="card-body">
					<h2 className="flex items-center justify-between card-title">
						<span className="font-mono text-2xl md:text-4xl">
							{type[0].toUpperCase() + type.slice(1)}
						</span>
						<div>
							<span className="font-mono text-4xl font-extrabold">
								{calculateAttrScore()}
							</span>
						</div>
					</h2>
					<div className="divider"></div>
					<div>
						{linked &&
							Object.keys(linked.skills).map(key => (
								<div key={key} className="flex items-center justify-between">
									<div className="flex items-center justify-between w-full my-2">
										<span className="tracking-wider ">
											{linked.skills[key].display}
										</span>
										<span className="font-mono text-3xl">
											{calculateSkillScore(
												linked.skills[key].points.current,
												key
											)}
										</span>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AttributeDetails;
