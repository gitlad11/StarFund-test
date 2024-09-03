'use client';
import { createSlice } from '@reduxjs/toolkit'

const favoriteReducer = createSlice({
    name: 'favorite',
    initialState: {
        favorites: [],
    },
    reducers: {
        setFavorites: (state: { favorites: Array<Object> }, action: { payload: any; }) => {
            state.favorites.push(action.payload);
        },
        removeFavorites: (state: { favorites: Array<Object> }, action: { payload: any; }) => {
            var filteredArray = state.favorites.filter(i => i['id'] !== action.payload['id']); 
            state.favorites = filteredArray;
        },
    },
});

export const { setFavorites, removeFavorites } = favoriteReducer.actions;

export default favoriteReducer.reducer