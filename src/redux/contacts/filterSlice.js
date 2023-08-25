import { createSlice } from "@reduxjs/toolkit";
import { initialFilter } from "./initialState";


const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilter,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload
        }
    }
})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

