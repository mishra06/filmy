import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bannerData:[],
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload;
        },
    },
})

export const { setBannerData } = moviesSlice.actions;

export default moviesSlice.reducer;