
import { createSlice } from '@reduxjs/toolkit'

const initInfo = {
	name: '',
	email: '',
	phone: ''
}

const personalInfo = createSlice({
	name: 'personalInfo',
	initialState: initInfo,
	reducers: {
		setName(state, action) {
			state.name = action.payload;
		},
		setEmail(state, action) {
			state.email = action.payload;
		},
		setPhone(state, action) {
			state.phone = action.payload;
		}
	}
});

const infoReducer = personalInfo.reducer;

export const info = personalInfo.actions;  
export default infoReducer;