import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	points: {
		current: 3,
		max: 3
	}
};

const skillsSlice = createSlice({
	initialState,
	name: 'boons',
	reducers: {}
});

const { reducer } = skillsSlice;

// export const { increase, descrease } = actions;

export default reducer;
