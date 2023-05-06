import { createSlice } from "@reduxjs/toolkit";

const addonSlice =  createSlice({
	name: 'addon',
	initialState: {
		addons: []
	},
	reducers: {
		addAddon(state, action) {
			state.addons.push(action.payload);
		},
		removeAddons(state) {
			state.addons = [];
		}
	}
})

const addonReducer = addonSlice.reducer;

export const addonActions = addonSlice.actions;

export default addonReducer;