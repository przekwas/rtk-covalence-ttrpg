import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	points: {
		current: 5,
		max: 5
	},
	selected: []
};

const traitsSlice = createSlice({
	initialState,
	name: 'traits',
	reducers: {
		selectTrait: (state, action) => {
			state.selected.push(action.payload);
			state.points.current--;
		},
		refundTrait: (state, action) => {
			const idx = state.selected.findIndex(trait => trait.id === action.payload);
			state.selected.splice(idx, 1);
			state.points.current++;
		}
	}
});

const { reducer, actions } = traitsSlice;

export const { selectTrait, refundTrait } = actions;

export default reducer;
