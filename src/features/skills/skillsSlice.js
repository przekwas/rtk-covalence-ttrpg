import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	dexterity: {
		skills: {
			typing: {
				display: 'Typing Speed',
				points: {
					current: 1,
					max: 10
				}
			},
			sleightOfHand: {
				display: 'Sleight of Hand',
				points: {
					current: 1,
					max: 10
				}
			},
			stealth: {
				display: 'Stealth',
				points: {
					current: 1,
					max: 10
				}
			},
			acrobatics: {
				display: 'Acrobatics',
				points: {
					current: 1,
					max: 10
				}
			},
			driving: {
				display: 'Driving',
				points: {
					current: 1,
					max: 10
				}
			}
		}
	},
	grit: {
		skills: {
			sitting: {
				display: 'Sitting Endurance',
				points: {
					current: 1,
					max: 10
				}
			},
			debugging: {
				display: 'Debugging Spirit',
				points: {
					current: 1,
					max: 10
				}
			},
			imposter: {
				display: 'Resist Imposter Syndrome',
				points: {
					current: 1,
					max: 10
				}
			}
		}
	},
	logic: {
		skills: {
			algorithm: {
				display: 'Algorithm Construction',
				points: {
					current: 1,
					max: 10
				}
			},
			reverse: {
				display: 'Reverse Engineering',
				points: {
					current: 1,
					max: 10
				}
			},
			planning: {
				display: 'Planning',
				points: {
					current: 1,
					max: 10
				}
			}
		}
	},
	creativity: {
		skills: {
			search: {
				display: 'Search Engine Skill',
				points: {
					current: 1,
					max: 10
				}
			},
			recycling: {
				display: 'Recycling Old Projects',
				points: {
					current: 1,
					max: 10
				}
			},
			logging: {
				display: 'Console Logging',
				points: {
					current: 1,
					max: 10
				}
			},
			phishing: {
				display: 'Phising',
				points: {
					current: 1,
					max: 10
				}
			},
			social: {
				display: 'Social Engineering',
				points: {
					current: 1,
					max: 10
				}
			}
		}
	},
	learning: {
		skills: {
			parsing: {
				display: 'Parsing',
				points: {
					current: 1,
					max: 10
				}
			},
			techLiteracy: {
				display: 'Technical Literacy',
				points: {
					current: 1,
					max: 10
				}
			},
			activeListen: {
				display: 'Active Listening',
				points: {
					current: 1,
					max: 10
				}
			},
			documentation: {
				display: 'Reading Documentation',
				points: {
					current: 1,
					max: 10
				}
			}
		}
	},
	points: {
		current: 30,
		max: 30
	}
};

const skillsSlice = createSlice({
	initialState,
	name: 'skills',
	reducers: {}
});

const { reducer } = skillsSlice;

// export const { increase, descrease } = actions;

export default reducer;
