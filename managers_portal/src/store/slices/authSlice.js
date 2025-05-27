// store/slices/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const signin = createAsyncThunk(
  'user/signin',
  async (credentials, thunkAPI) => {
    const res = await axios.get('http://localhost:8080/users', {
      params: { email: credentials.email, password: credentials.password },
    })

    if (res.data.length > 0) return res.data[0]
    else throw new Error('Invalid credentials')
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default userSlice.reducer
