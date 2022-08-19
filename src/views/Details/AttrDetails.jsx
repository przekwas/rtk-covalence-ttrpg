import { useSelector } from 'react-redux';

const AttributeDetails = ({ type }) => {
    
	const attrScore = useSelector(state => state.attributes[type]);
	const linked = useSelector(state => state.skills[type]);

	return (
		<div className="w-full my-2 overflow-hidden md:w-1/3 md:my-3 md:px-3">
			<div className="h-full shadow-xl card bg-secondary text-secondary-content">
				<div className="card-body">
					<h2 className="flex items-center justify-between card-title">
						<span className="font-mono text-2xl md:text-4xl">
							{type[0].toUpperCase() + type.slice(1)}
						</span>
						<div>
							<span className="font-mono text-4xl font-extrabold">{attrScore}</span>
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
											{linked.skills[key].points.current}
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
