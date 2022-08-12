import { configureStore } from '@reduxjs/toolkit';

import attributesReducer from '../features/attributes/attributesSlice';
import skillsReducer from '../features/skills/skillsSlice';
import boonsReducer from '../features/boons/boonsSlice';
import cursesReducer from '../features/curses/cursesSlice';

export default configureStore({
	reducer: {
		attributes: attributesReducer,
		skills: skillsReducer,
		boons: boonsReducer,
		curses: cursesReducer
	}
});
