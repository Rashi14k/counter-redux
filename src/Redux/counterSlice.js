import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{counter:0},
    reducers:{
        increment:(state)=>{
            state.counter+=1
        },
        decrement:(state)=>{
            state.counter-=1
        },
        reset:(state)=>{
            state.counter=0
        },
        incrementby:(state,action)=>{
            state.counter+=action.payload
        }
    

    }

})
export const{increment,decrement,reset,incrementby}=counterSlice.actions
export default counterSlice.reducer
