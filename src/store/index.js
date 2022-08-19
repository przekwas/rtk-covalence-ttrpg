import { configureStore } from '@reduxjs/toolkit';

import attributesReducer from '../features/attributes/attributesSlice';
import skillsReducer from '../features/skills/skillsSlice';
import traitsReducer from '../features/traits/traitsSlice';
import descriptionReducer from '../features/description/descriptionSlice';

export default configureStore({
	reducer: {
		attributes: attributesReducer,
		skills: skillsReducer,
		traits: traitsReducer,
		description: descriptionReducer
	}
});
