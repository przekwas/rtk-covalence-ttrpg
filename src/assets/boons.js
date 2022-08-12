import { typeMap, attrMap, skillsMap } from './keyMaps';

export const boonsArray = [
	{
		id: 1,
		name: 'Night Owl',
		requirements: [],
		description: 'You are habitually active at night.',
		bonuses: [
			{
				type: typeMap.SKILL,
				key: skillsMap.STEALTH,
				display: '+1 Stealth',
				value: 1
			},
			{
				type: typeMap.SKILL,
				key: skillsMap.CAFFEINE,
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
				type: typeMap.ATTR,
				key: attrMap.DEXTERITY,
				display: 'Dexterity',
				value: 10
			}
		],
		description: 'You are naturally inclinded to clandestine activities.',
		bonuses: [
			{
				type: typeMap.ATTR,
				key: attrMap.DEXTERITY,
				display: '+1 Dexterity',
				value: 1
			},
			{
				type: typeMap.SKILL,
				key: skillsMap.STEALTH,
				display: '+1 Stealth',
				value: 1
			},
			{
				type: typeMap.SKILL,
				key: skillsMap.SLEIGHT_OF_HAND,
				display: '+2 Sleight of Hand',
				value: 2
			}
		]
	},
	{
		id: 3,
		name: 'Hardware Hoarder',
		requirements: [],
		description:
			'You have saved every cable, computer, and accessory.  Your bountiful hardware resources and knowledge of them allow you to be able to handle even the most archaic of codebases.',
		bonuses: []
	},
	{
		id: 4,
		name: 'Gamer',
		requirements: [],
		description:
			'Years of gaming have improved your reflexes.  14 hours sitting in your chair for that new expansion release?  Easy.  Chugging G-Fuel until you stop blinking?  Habitual.',
		bonuses: [
			{
				type: typeMap.ATTR,
				key: attrMap.DEXTERITY,
				display: '+1 Dexterity',
				value: 1
			},
			{
				type: typeMap.SKILL,
				key: skillsMap.CAFFEINE,
				display: '+1 Caffeine Tolerance',
				value: 1
			},
			{
				type: typeMap.SKILL,
				key: skillsMap.SITTING,
				display: '+2 Sitting Endurance',
				value: 2
			}
		]
	},
	{
		id: 5,
		name: 'Barista',
		requirements: [],
		description:
			'Your fondness of and proximity to coffee, espresso, and other caffeinated beverages have imparted you with an increased tolerance to caffeine.',
		bonuses: [
			{
				type: 'skill',
				key: 'caffeine',
				display: '+3 Caffeine Tolerance',
				value: 3
			}
		]
	},
	{
		id: 6,
		name: 'Spreadsheet Fanatic',
		requirements: [],
		description:
			'You grew up with a love for organization, formulae, and conditional formatting.  Nerd.',
		bonuses: [
			{
				type: typeMap.SKILL,
				key: skillsMap.ALGORITHM,
				display: '+1 Algorithm Construction',
				value: 1
			},
			{
				type: typeMap.SKILL,
				key: skillsMap.PLANNING,
				display: '+1 Planning',
				value: 1
			}
		]
	},
	{
		id: 7,
		name: 'LG Tesler',
		requirements: [],
		description: "You're personally responsible for 0.1% of keyboard cap sales in your region.",
		bonuses: [
			{
				type: typeMap.SKILL,
				key: skillsMap.RECYCLING,
				display: '+3 Recycling Old Projects',
				value: 3
			}
		]
	},
	{
		id: 8,
		name: 'Bookworm',
		requirements: [],
		description: 'Your years of taking notes in group projects are starting to pay off.',
		bonuses: [
			{
				type: typeMap.SKILL,
				key: skillsMap.DOCUMENTATION,
				display: '+3 Reading Documentation',
				value: 3
			}
		]
	},
	{
		id: 9,
		name: 'Mavis Beacon',
		requirements: [],
		description:
			'Remember that time when you came in first place in the middle school typing contest with 23 words per minute?',
		bonuses: [
			{
				type: typeMap.SKILL,
				key: skillsMap.TYPING,
				display: '+4 Typing Speed',
				value: 4
			}
		]
	},
	{
		id: 10,
		name: 'Fat Fingres',
		requirements: [],
		description:
			'You are comfortable with your body, you are not comfortable with how it interacts with a keyboard.',
		bonuses: [
			{
				type: typeMap.SKILL,
				key: skillsMap.DEBUGGING,
				display: '+1 Debugging Spirit',
				value: 1
			},
			{
				type: typeMap.SKILL,
				key: skillsMap.LOGGING,
				display: '+1 Console Logging',
				value: 1
			},
			{
				type: typeMap.SKILL,
				key: skillsMap.DOCUMENTATION,
				display: '+1 Reading Documentation',
				value: 1
			}
		]
	}
];

/*
{
	id: 000,
	name: 'Template',
	requirements: [],
	description: 'Template Description.',
	bonuses: [
		{
			type: 'template',
			key: 'template',
			display: '+3 Template',
			value: 3
		}
	]
}
*/
