import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import attributesReducer from '../features/attributes/attributesSlice';
import skillsReducer from '../features/skills/skillsSlice';
import traitsReducer from '../features/traits/traitsSlice';
import descriptionReducer from '../features/description/descriptionSlice';

const rootReducer = combineReducers({
	attributes: attributesReducer,
	skills: skillsReducer,
	traits: traitsReducer,
	description: descriptionReducer
});

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
});

export const persistor = persistStore(store);
