import { createSlice } from "@reduxjs/toolkit";

const initPlan = {
	plan: '',
	mode: '',
	price: 0
}

const planSlice = createSlice({
	name: 'plan',
	initialState: initPlan,
	reducers: {
		setPlan(state, action) {
			state.plan = action.payload;
		},
		setMode(state, action) {
			state.mode = action.payload;
		},
		setPrice(state, action) {
			state.price = action.payload;
		}
	}
})

const planReducer = planSlice.reducer;

export const planActions = planSlice.actions;

export default planReducer