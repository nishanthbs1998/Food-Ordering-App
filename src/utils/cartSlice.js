import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            const filteredCart=state.items.filter(val=>action.payload.id!==val.id)
            state.items=filteredCart
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer
