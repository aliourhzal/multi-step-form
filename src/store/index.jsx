import { configureStore } from '@reduxjs/toolkit'
import infoReducer from './infoSlice';
import planReducer from './planSlice';
import addonReducer from './addonSlice';


const store = configureStore({
	reducer: {
		personalInfo: infoReducer,
		plan: planReducer,
		addons: addonReducer
	}
});

export default store;