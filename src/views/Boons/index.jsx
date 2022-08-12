import React from 'react';

const boonsArray = [
	{
		id: 1,
		name: 'Night Owl',
		requirements: [],
		description: 'You are habitually active at night.',
		bonuses: [
			{
				type: 'skill',
				key: 'stealth',
				display: '+1 Stealth',
				value: 1
			},
			{
				type: 'skill',
				key: 'caffeine',
				display: '+1 Caffeine Tolerance',
				value: 1
			}
		]
	},
	{
		id: 2,
		name: 'Thief',
		requirements: [
			{
				type: 'attribute',
				key: 'dexterity',
				display: 'Dexterity',
				value: 10
			}
		],
		description: 'You are naturally inclinded to clandestine activities.',
		bonuses: [
			{
				type: 'attribute',
				key: 'dexterity',
				display: '+1 Dexterity',
				value: 1
			},
			{
				type: 'skill',
				key: 'stealth',
				display: '+1 Stealth',
				value: 1
			},
			{
				type: 'skill',
				key: 'sleightOfHand',
				display: '+2 Sleight of Hand',
				value: 2
			}
		]
	},
	{
		id: 3,
		name: 'Hardware Hoarder',
		requirements: [],
		description: 'You have saved every cable, computer, and accessory.  Your bountiful hardware resources and knowledge of them allow you to be able to handle even the most archaic of codebases.',
		bonuses: []
	}
];

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
								<div className="card-title">{boon.name}</div>
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
