'use client';
import { createSlice } from '@reduxjs/toolkit'

const productReducer = createSlice({
    name: 'products',
    initialState: {
        products: [],
        //Нужно создать модель DTO 
        product: { 
            'picture' : { 'large' : '', },
            'name' : { 'last' : '', 'first' : '', },
        }
    },
    reducers: {
        setProducts: (state: { products: Array<Object>; }, action: { payload: any; }) => {
            state.products = action.payload;
        },
        setProduct: (state: { product: Object; }, action: { payload: any; }) => {
            state.product = action.payload;
        }
    },
});

export const { setProduct, setProducts } = productReducer.actions;

export default productReducer.reducer