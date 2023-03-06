import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
name : 'dataSlice',
initialState:[
    {name:'alok'},
    {name:'abhi'}
],
reducers : {
    addStudent:(state, action)=>{
        state.push(action.payload)
        return (state)
    }
}
})
export const {addStudent} = slice.actions
export default slice.reducer