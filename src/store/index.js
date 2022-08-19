import { configureStore } from '@reduxjs/toolkit';

import attributesReducer from '../features/attributes/attributesSlice';
import skillsReducer from '../features/skills/skillsSlice';
import traitsReducer from '../features/traits/traitsSlice';

export default configureStore({
	reducer: {
		attributes: attributesReducer,
		skills: skillsReducer,
		traits: traitsReducer
	}
});
