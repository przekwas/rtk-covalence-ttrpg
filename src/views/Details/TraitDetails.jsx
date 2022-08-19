import React from 'react';

const TraitDetails = ({ trait }) => {
	return (
		<div className="w-full my-2 overflow-hidden md:w-1/3 md:my-3 md:px-3">
			<div className="relative shadow-xl card bg-secondary text-secondary-content">
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
							<div className="font-mono divider text-error">requirements</div>
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
	);
};

export default TraitDetails;
