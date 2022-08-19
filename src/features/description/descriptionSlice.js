import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: '',
	handle: '',
	background: ''
};

const descriptionSlice = createSlice({
	initialState,
	name: 'description',
	reducers: {
		changeValue: (state, action) => {
			state[action.payload.key] = action.payload.value;
		}
	}
});

const { reducer, actions } = descriptionSlice;

export const { changeValue } = actions;

export default reducer;