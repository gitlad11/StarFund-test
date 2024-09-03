'use client';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/productSlice';
import favoriteReducer from './product/favoriteSlice';

export var store = configureStore({
  reducer : {
    product : productReducer,
    favorite: favoriteReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;