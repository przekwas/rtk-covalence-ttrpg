export const typeMap = {
	ATTR: 'attribute',
	SKILL: 'skill'
};

export const attrMap = {
	DEXTERITY: 'dexterity',
	TENACITY: 'tenacity',
	LOGIC: 'logic',
	CREATIVITY: 'creativity',
	LEARNING: 'learning'
};

export const skillsMap = {
	TYPING: {
		parentAttr: attrMap.DEXTERITY,
		name: 'typing'
	},
	SLEIGHT_OF_HAND: {
		parentAttr: attrMap.DEXTERITY,
		name: 'sleightOfHand'
	},
	STEALTH: {
		parentAttr: attrMap.DEXTERITY,
		name: 'stealth'
	},
	SITTING: {
		parentAttr: attrMap.TENACITY,
		name: 'sitting'
	},
	DEBUGGING: {
		parentAttr: attrMap.TENACITY,
		name: 'debugging'
	},
	IMPOSTER: {
		parentAttr: attrMap.TENACITY,
		name: 'imposter'
	},
	CAFFEINE: {
		parentAttr: attrMap.TENACITY,
		name: 'caffeine'
	},
	ALGORITHM: {
		parentAttr: attrMap.LOGIC,
		name: 'algorithm'
	},
	REVERSE: {
		parentAttr: attrMap.LOGIC,
		name: 'reverse'
	},
	PLANNING: {
		parentAttr: attrMap.LOGIC,
		name: 'planning'
	},
	SEARCH: {
		parentAttr: attrMap.CREATIVITY,
		name: 'search'
	},
	RECYCLING: {
		parentAttr: attrMap.CREATIVITY,
		name: 'recycling'
	},
	LOGGING: {
		parentAttr: attrMap.CREATIVITY,
		name: 'logging'
	},
	SOCIAL: {
		parentAttr: attrMap.CREATIVITY,
		name: 'social'
	},
	PARSING: {
		parentAttr: attrMap.LEARNING,
		name: 'parsing'
	},
	TECH_LITERACY: {
		parentAttr: attrMap.LEARNING,
		name: 'techLiteracy'
	},
	ACTIVE_LISTEN: {
		parentAttr: attrMap.LEARNING,
		name: 'activeListen'
	},
	DOCUMENTATION: {
		parentAttr: attrMap.LEARNING,
		name: 'documentation'
	}
};
