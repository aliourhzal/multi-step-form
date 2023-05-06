import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentStep: 0,
	availablePages: [
		'/personalInfo',
		'/selectPlan',
		'/pickAddons',
		'/summery',
		'/thankYou'
	]
}

const currentStep = createSlice({
	name: "Steps",
	initialState,
	reducers: {
		nextPage(state) {
			state.currentStep += 1;
		},
		previousPage(state) {
			state.currentStep -= 1;
		},
		changePage(state, action) {
			state.currentStep = action.payload;
		}
	}
})

const stepsReducer = currentStep.reducer;

export const stepsActions = currentStep.actions;

export default stepsReducer;