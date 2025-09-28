import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Simulation of backend request + fake user verification
export const fetchUser = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "cortisol@example.com" && password === "1234ToT6") {
        resolve({ email, token: "jiajsid8as8das8d8a" });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};

const initialState = {
  loading: false,
  user: null,
};

export const signin = createAsyncThunk("signin", async (payload) => {
  let result = await fetchUser(payload);
  // result == { email, token: "jiajsid8as8das8d8a" }
  return result;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      //   state.user = action.payload; {email, password}
      state.user = {
        email: action.payload.email,
      };
    },
    logout: (state) => {
      state.user = null;
    },
    /*changePassword: (_state, _action) => {
    }, */
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.loading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        // action.payload == { email, token: "jiajsid8as8das8d8a" }
        state.user = action.payload;
      })
      .addCase(signin.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { login, logout, changePassword } = userSlice.actions;
export default userSlice.reducer;
