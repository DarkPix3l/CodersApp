const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // --- Signup Cases ---
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Store the new user data
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Set the error message
      });
  },
});