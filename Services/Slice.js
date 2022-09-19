import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"Humayun saeed ",
    rollno:"10"
}

export const name = createSlice({
    name:"name",
    initialState,
    reducers:(state)=>{
        setName:(state,action)=>{
            state.name=action.payload
        }
    }

})

export const {setName} = name.actions

export default name.reducer