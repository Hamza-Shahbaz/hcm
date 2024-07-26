import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    token : ''
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setToken : (state, payload) => {
            state.token = payload
        },
        resetToken : (state, payload) => {
            state.token = null
        }
    }
})

export const {setToken, resetToken} = authSlice.actions
export default authSlice.reducer
