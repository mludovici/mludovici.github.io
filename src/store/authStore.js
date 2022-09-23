
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { loadPlugin } from '@reduxjs/toolkit/node_modules/immer/dist/internal';
import { auth } from '../firebaseConfig'



const initialState = {
	loading: "idle",
	error: null,
	isLoggedIn: false,
	user: undefined,
}

export const login = createAsyncThunk(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		let response = await auth.signInWithEmailAndPassword(email, password)
		return response;
	}

);



const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginUser(state, action) {
			console.log("Login:", { state, action })
			state.user = action.payload.user
		}

	},
	extraReducers(builder) {
		builder
			.addCase(login.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(login.fulfilled, (state, action) => {
				console.log("Action:", { action })
				state.status = 'succeeded'
				// Add any fetched posts to the array
				state.user = action.payload
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
})


// Async redux action creators
export const loginAction = (email, password) => {
	return async (dispatch) => {
		let user = await auth.signInWithEmailAndPassword(email, password)
		dispatch(/*loginUser(user*/{ type: "auth/loginUser", payload: user });
	}
}

export const { loginUser } = authSlice.actions;
export default authSlice.reducer


