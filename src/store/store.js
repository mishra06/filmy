import { configureStore } from "@reduxjs/toolkit";

import moviesSlice from "./moviesSlice";

const store = configureStore({
    reducer:{
        movieData: moviesSlice
    }
})

export default store;