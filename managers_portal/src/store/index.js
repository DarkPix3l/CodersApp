import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/login_authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
