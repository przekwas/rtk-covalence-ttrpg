import { typeMap, attrMap, skillsMap } from './keyMaps';

export const traitsArray = [
	{
		id: 1,
		name: 'Night Owl',
		requirements: [],
		description: 'You are habitually active at night.',
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.STEALTH,
				display: '+1 Stealth',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.CAFFEINE,
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
				pair: attrMap.DEXTERITY,
				display: 'Dexterity',
				value: 10
			}
		],
		description: 'You are naturally inclinded to clandestine activities.',
		bonuses: [
			{
				type: typeMap.ATTR,
				pair: attrMap.DEXTERITY,
				display: '+1 Dexterity',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.STEALTH,
				display: '+1 Stealth',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.SLEIGHT_OF_HAND,
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
				pair: attrMap.DEXTERITY,
				display: '+1 Dexterity',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.CAFFEINE,
				display: '+1 Caffeine Tolerance',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.SITTING,
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
				type: typeMap.SKILL,
				pair: skillsMap.CAFFEINE,
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
				pair: skillsMap.ALGORITHM,
				display: '+1 Algorithm Construction',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.PLANNING,
				display: '+1 Planning',
				value: 1
			}
		]
	},
	{
		id: 7,
		name: 'LG Tesler',
		requirements: [],
		description:
			"You're personally responsible for 0.1% of pairboard cap sales in your region.",
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.RECYCLING,
				display: '+3 Recycling Old Projects',
				value: 3
			}
		]
	},
	{
		id: 8,
		name: 'Bookworm',
		requirements: [],
		description:
			'Your years of taking notes in group projects are starting to pay off.  But you find it harder to interact with people.',
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.DOCUMENTATION,
				display: '+3 Reading Documentation',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.SOCIAL,
				display: '-1 Social Engineering',
				value: -1
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
				pair: skillsMap.TYPING,
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
			'You are comfortable with your body, you are not comfortable with how it interacts with a pairboard.',
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.DEBUGGING,
				display: '+1 Debugging Spirit',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.LOGGING,
				display: '+1 Console Logging',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.DOCUMENTATION,
				display: '+1 Reading Documentation',
				value: 1
			}
		]
	},
	{
		id: 11,
		name: 'Perfectionist',
		requirements: [],
		description: 'You refuse to accept any standard short of perfection.',
		bonuses: [
			{
				type: typeMap.ATTR,
				pair: attrMap.LEARNING,
				display: '+1 Learning',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.DEBUGGING,
				display: '+1 Debugging Spirit',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.PLANNING,
				display: '+1 Planning',
				value: 1
			}
		]
	},
	{
		id: 12,
		name: '"It Works."',
		requirements: [],
		description:
			"That's weird, it was working a minute ago?  Well it works on my machine, at least.",
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.STEALTH,
				display: '+2 Stealth',
				value: 2
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.SEARCH,
				display: '+2 Search Engine Skill',
				value: 2
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.TECH_LITERACY,
				display: '-1 Technical Literacy',
				value: -1
			}
		]
	},
	{
		id: 13,
		name: 'Click-Clacker',
		requirements: [],
		description:
			'Mechanical pairboards are life.  And you are all about Cherry MX Blue switches: the loudest and most tactile switches.  You must sacrifice everything for the classic "click."',
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.TYPING,
				display: '+3 Typing Speed',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.STEALTH,
				display: '-1 Stealth',
				value: -1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.ACTIVE_LISTEN,
				display: '-1 Active Listening',
				value: -1
			}
		]
	},
	{
		id: 14,
		name: 'Game Master',
		requirements: [],
		description:
			'The Game Master (GM) assumes the role of referee.  You are responsible for preparing each game session, and have a thorough understanding of the game rules.  Now to try and wrangle those chaotic stupid players in ...',
		bonuses: [
			{
				type: typeMap.ATTR,
				pair: attrMap.CREATIVITY,
				display: '+1 Creativity',
				value: 1
			},
			{
				type: typeMap.ATTR,
				pair: attrMap.DEXTERITY,
				display: '-1 Dexterity',
				value: -1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.PLANNING,
				display: '+1 Planning',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.SITTING,
				display: '+1 Sitting Endurance',
				value: 1
			}
		]
	},
	{
		id: 15,
		name: 'Tech Lead',
		requirements: [],
		description:
			"You are a software engineer who watch over the quality of the software development team's work and ensure the success of the delivered solutions.",
		bonuses: [
			{
				type: typeMap.ATTR,
				pair: attrMap.LOGIC,
				display: '+1 Logic',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.DEBUGGING,
				display: '+1 Debugging Spirit',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.PARSING,
				display: '+1 Parsing',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.IMPOSTER,
				display: '-2 Resist Imposter Syndrome',
				value: -2
			}
		]
	},
	{
		id: 16,
		name: 'Type A',
		requirements: [],
		description:
			'The phrase "Type A" refers to a pattern of behavior and personality associated with high achievement, competitiveness, and impatience, among other characteristics.',
		bonuses: [
			{
				type: typeMap.ATTR,
				pair: attrMap.LEARNING,
				display: '+1 Learning',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.TECH_LITERACY,
				display: '+1 Technical Literacy',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.ACTIVE_LISTEN,
				display: '+2 Active Listening',
				value: 2
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.SITTING,
				display: '-1 Sitting Endurance',
				value: -1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.IMPOSTER,
				display: '-1 Resist Imposter Syndrome',
				value: -1
			}
		]
	},
	{
		id: 17,
		name: 'Fiber Internet',
		requirements: [],
		description:
			"You have a lightning fast internet connection from a local public provider, because the big ISP's suck.  You are able to skip any time delays when uploading worms, hacks, and viruses.",
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.SEARCH,
				display: '+3 Search Engine Skill',
				value: 3
			}
		]
	},
	{
		id: 18,
		name: 'Single',
		requirements: [],
		description:
			'You have no significant other or partner in your life, leaving you with lots of time to improve your hacker skillz.',
		bonuses: [
			{
				type: typeMap.ATTR,
				pair: attrMap.DEXTERITY,
				display: '+1 Dexterity',
				value: 1
			},
			{
				type: typeMap.ATTR,
				pair: attrMap.TENACITY,
				display: '+1 Tenacity',
				value: 1
			},
			{
				type: typeMap.ATTR,
				pair: attrMap.CREATIVITY,
				display: '+1 Creativity',
				value: 1
			},
			{
				type: typeMap.ATTR,
				pair: attrMap.LEARNING,
				display: '+1 Learning',
				value: 1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.SOCIAL,
				display: '-5 Social Engineering',
				value: -5
			}
		]
	},
	{
		id: 19,
		name: 'Zero Cool',
		requirements: [],
		description: 'Good guy, bad reputation, and no style whatsoever.',
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.ALGORITHM,
				display: '+3 Algorithm Construction',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.REVERSE,
				display: '+3 Reverse Engineering',
				value: 3
			}
		]
	},
	{
		id: 20,
		name: 'Acid Burn',
		requirements: [
			{
				type: typeMap.ATTR,
				pair: attrMap.CREATIVITY,
				display: 'Creativity',
				value: 10
			}
		],
		description: 'Looks and skills that can kill.',
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.SOCIAL,
				display: '+3 Social Engineering',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.SEARCH,
				display: '+3 Search Engine Skill',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.TYPING,
				display: '+1 Typing Speed',
				value: 1
			}
		]
	},
	{
		id: 21,
		name: 'Cereal Killer',
		requirements: [],
		description:
			'Liked by everything and everyone except the infamous brothers Snap, Crackle, and Pop.',
		bonuses: []
	},
	{
		id: 22,
		name: 'Chronic 2001',
		requirements: [],
		description:
			"Knows everything, but remembers nothing. Friend of all dogs. Constantly hears random doorbells that don't exist.",
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.SITTING,
				display: '+3 Sitting Endurance',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.IMPOSTER,
				display: '+3 Resist Imposter Syndrome',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.ACTIVE_LISTEN,
				display: '-3 Active Listening',
				value: -3
			}
		]
	},
	{
		id: 23,
		name: "Mom's Meatloaf",
		requirements: [],
		description: 'Never has to pay rent and has access to unlimited amounts of Mountain Dew.',
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.SOCIAL,
				display: '-5 Social Engineering',
				value: -5
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.CAFFEINE,
				display: '+5 Caffeine Tolerance',
				value: 5
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.TECH_LITERACY,
				display: '+1 Technical Literacy',
				value: 1
			}
		]
	},
	{
		id: 24,
		name: 'The Hype Guy',
		requirements: [],
		description:
			'Your legend began in high school twirling Little Caesar\'s "Hot N Ready" signs on the side of the street. You don\'t really know any specific skills or specialties, but your presence and positive energy is the keystone of any successful mission.',
		bonuses: []
	},
	{
		id: 25,
		name: 'Always Blue',
		requirements: [],
		description:
			"You're the glue that holds the team together at their darkest moments, and this unshakable charisma is how you continue to fail upwards despite all odds.",
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.ACTIVE_LISTEN,
				display: '+3 Active Listening',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.DEBUGGING,
				display: '+3 Debugging Spirit',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.IMPOSTER,
				display: '-1 Resist Imposter Syndrome',
				value: -1
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.SOCIAL,
				display: '-2 Social Engineering',
				value: -2
			}
		]
	},
	{
		id: 26,
		name: 'The Guru',
		requirements: [],
		description:
			'Your reputation precedes your barefoot pitter patter as you walk into the team meeting. You\'ve had a sudden epiphany over the long weekend that will provide a solution to all of your woes, thanks in large part to your weekly meditation retreat and indulgence in some "questionable" edible arrangements.',
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.SLEIGHT_OF_HAND,
				display: '+2 Sleight of Hand',
				value: 2
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.SOCIAL,
				display: '+2 Social Engineering',
				value: 2
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.IMPOSTER,
				display: '+5 Resist Imposter Syndrome',
				value: 5
			}
		]
	},
	{
		id: 27,
		name: 'Rainman',
		requirements: [
			{
				type: typeMap.ATTR,
				pair: attrMap.LOGIC,
				display: 'Logic',
				value: 10
			}
		],
		description: 'Template Description.',
		bonuses: [
			{
				type: typeMap.SKILL,
				pair: skillsMap.TYPING,
				display: '+3 Typing Speed',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.TECH_LITERACY,
				display: '+3 Technical Literacy',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.DOCUMENTATION,
				display: '+3 Reading Documentation',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.PARSING,
				display: '+3 Parsing',
				value: 3
			},
			{
				type: typeMap.SKILL,
				pair: skillsMap.SOCIAL,
				display: '-4 Social Engineering',
				value: -4
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
			pair: 'template',
			display: '+3 Template',
			value: 3
		}
	]
}
*/
