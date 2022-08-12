import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	dexterity: 1,
	grit: 1,
	logic: 1,
	creativity: 1,
	learning: 1,
	points: {
		current: 20,
		max: 20
	}
};

const attributesSlice = createSlice({
	initialState,
	name: 'attributes',
	reducers: {
		increase: (state, action) => {
			state[action.payload] += 1;
			state.points.current--;
		},
		descrease: (state, action) => {
			state[action.payload] -= 1;
			state.points.current++;
		}
	}
});

const { reducer, actions } = attributesSlice;

export const { increase, descrease } = actions;

export default reducer;
