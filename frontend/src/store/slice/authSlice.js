import {createSlice} from '@reduxjs/toolkit'
const authState={
    user:[],
    isloading:false
}
const authSlice=createSlice({
    name:'auth',
    initialState:authState,
    reducers:{
        loginRequest(state,action){
            state.isloading=true;
        },
        loginUser(state,action){
            state.user=action.payload;
            state.isloading=false;
        },
        userByToken(state,action){
            state.user=action.payload;

        }
       
    }
})
export const {loginUser,loginRequest,userByToken}=authSlice.actions;
export default authSlice.reducer;