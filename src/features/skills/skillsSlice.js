import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	dexterity: {
		skills: {
			typing: {
				display: 'Typing Speed',
				points: {
					current: 1
				}
			},
			sleightOfHand: {
				display: 'Sleight of Hand',
				points: {
					current: 1
				}
			},
			stealth: {
				display: 'Stealth',
				points: {
					current: 1
				}
			}
		}
	},
	tenacity: {
		skills: {
			sitting: {
				display: 'Sitting Endurance',
				points: {
					current: 1
				}
			},
			debugging: {
				display: 'Debugging Spirit',
				points: {
					current: 1
				}
			},
			imposter: {
				display: 'Resist Imposter Syndrome',
				points: {
					current: 1
				}
			},
			caffeine: {
				display: 'Caffeine Tolerance',
				points: {
					current: 1
				}
			}
		}
	},
	logic: {
		skills: {
			algorithm: {
				display: 'Algorithm Construction',
				points: {
					current: 1
				}
			},
			reverse: {
				display: 'Reverse Engineering',
				points: {
					current: 1
				}
			},
			planning: {
				display: 'Planning',
				points: {
					current: 1
				}
			}
		}
	},
	creativity: {
		skills: {
			search: {
				display: 'Search Engine Skill',
				points: {
					current: 1
				}
			},
			recycling: {
				display: 'Recycling Old Projects',
				points: {
					current: 1
				}
			},
			logging: {
				display: 'Console Logging',
				points: {
					current: 1
				}
			},
			social: {
				display: 'Social Engineering',
				points: {
					current: 1
				}
			}
		}
	},
	learning: {
		skills: {
			parsing: {
				display: 'Parsing',
				points: {
					current: 1
				}
			},
			techLiteracy: {
				display: 'Technical Literacy',
				points: {
					current: 1
				}
			},
			activeListen: {
				display: 'Active Listening',
				points: {
					current: 1
				}
			},
			documentation: {
				display: 'Reading Documentation',
				points: {
					current: 1
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
	reducers: {
		increaseSkill: (state, action) => {
			state[action.payload.attr].skills[action.payload.skill].points.current++;
			state.points.current--;
		},
		decreaseSkill: (state, action) => {
			state[action.payload.attr].skills[action.payload.skill].points.current--;
			state.points.current++;
		},
	}
});

const { reducer, actions } = skillsSlice;

export const { increaseSkill, decreaseSkill, skillChangeFromTrait } = actions;

export default reducer;
