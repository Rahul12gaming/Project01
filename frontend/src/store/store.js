import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice'
import taskSlice from './slice/taskSlice';
export const store=configureStore({
    reducer:{
        auth:authSlice,
        task:taskSlice
    }
})