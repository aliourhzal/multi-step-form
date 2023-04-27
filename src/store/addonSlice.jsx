import { createSlice } from "@reduxjs/toolkit";

const addonSlice =  createSlice({
	name: 'addon',
	initialState: [],
	reducers: {
		addAddon(state, action) {
			state.push(action.payload);
		}
	}
})

const addonReducer = addonSlice.reducer;

export const addonActions = addonSlice.actions;

export default addonReducer;