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
