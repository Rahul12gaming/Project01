import {createSlice} from '@reduxjs/toolkit'
const taskState={
    task:[],
    isloading:false
}
const taskSlice=createSlice({
    name:'task',
    initialState:taskState,
    reducers:{
        allTaskRequest(state,action){
            state.isloading=true;
        },
        allTask(state,action){
            state.task=action.payload;
            state.isloading=false;
        }
    }
})
export const {allTask,allTaskRequest}=taskSlice.actions;
export default taskSlice.reducer;