import { boonsArray } from '../../assets/boons';

const Boons = () => {
	return (
		<div className="container mx-auto my-5">
			<div className="mb-5 text-4xl font-extrabold text-center" id="game-text">
				Boons
			</div>
			<section className="flex flex-wrap items-stretch justify-center w-full overflow-hidden md:-mx-3">
				{boonsArray.map(boon => (
					<div
						key={boon.id}
						className="w-full my-2 overflow-hidden md:w-1/3 md:my-3 md:px-3">
						<div className="shadow-xl card bg-secondary text-secondary-content">
							<div className="card-body">
								<div className="font-mono card-title">{boon.name}</div>
								<div>{boon.description}</div>
								<div className="flex flex-wrap items-center justify-start -mx-1">
									{boon.bonuses.length > 0 && (
										<>
											{boon.bonuses.map(bonus => (
												<div
													key={`boon-${boon.id}-bonus-${bonus.key}`}
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
								{boon.requirements.length > 0 && (
									<>
										<div className="font-mono divider text-error">
											requirements
										</div>
										<div className="flex flex-wrap items-center justify-start -mx-1">
											{boon.requirements.map(requirement => (
												<div
													key={`boon-${boon.id}-requirement-${requirement.key}`}
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

export default Boons;
