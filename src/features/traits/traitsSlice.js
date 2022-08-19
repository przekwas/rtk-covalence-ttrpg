import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	points: {
		current: 5,
		max: 5
	},
	selected: [],
	attributeBonuses: {},
	skillBonuses: {}
};

const traitsSlice = createSlice({
	initialState,
	name: 'traits',
	reducers: {
		selectTrait: (state, action) => {
			// add trait to array
			state.selected.push(action.payload);

			// add trait bonus if it has any
			action.payload.bonuses?.forEach(bonus => {
				// logic if bonus is a skill
				if (bonus.type === 'skill') {
					if (state.skillBonuses[bonus.pair.name]) {
						// if exists, change value
						state.skillBonuses[bonus.pair.name].value += bonus.value;
					} else {
						// else create property and assign initial value
						state.skillBonuses[bonus.pair.name] = { value: bonus.value };
					}
				}

				if (bonus.type === 'attribute') {
					if (state.attributeBonuses[bonus.pair]) {
						// if exists, change value
						state.attributeBonuses[bonus.pair].value += bonus.value;
					} else {
						// else create property and assign initial value
						state.attributeBonuses[bonus.pair] = { value: bonus.value };
					}
				}
			});

			// spend point
			state.points.current--;
		},
		refundTrait: (state, action) => {
			// remove trait from selected array
			const idx = state.selected.findIndex(trait => trait.id === action.payload);
			state.selected.splice(idx, 1);

			// refund point
			state.points.current++;
		}
	}
});

const { reducer, actions } = traitsSlice;

export const { selectTrait, refundTrait } = actions;

export default reducer;
