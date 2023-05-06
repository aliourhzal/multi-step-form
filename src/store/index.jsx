import { configureStore } from '@reduxjs/toolkit'
import infoReducer from './infoSlice';
import planReducer from './planSlice';
import addonReducer from './addonSlice';
import stepsReducer from './currentStepSlice';


const store = configureStore({
	reducer: {
		personalInfo: infoReducer,
		plan: planReducer,
		addons: addonReducer,
		steps: stepsReducer
	}
});

export default store;