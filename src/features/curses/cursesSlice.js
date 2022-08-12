import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	points: {
		current: 2,
		max: 2
	}
};

const skillsSlice = createSlice({
	initialState,
	name: 'curses',
	reducers: {}
});

const { reducer } = skillsSlice;

// export const { increase, descrease } = actions;

export default reducer;
