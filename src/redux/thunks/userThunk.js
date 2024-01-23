import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const createUser = createAsyncThunk('user/createUser', async (user)=> {
        const url = `${backendUrl}/api/v1/auth/register`
        try {
            const response = await axios.post(url, user)
            return response.data           
        } catch (error) {
            throw new Error(`Could not add user because of ${error}`)
        }

})
console.log(backendUrl);
const login = createAsyncThunk('user/login', async (user)=> {
        console.log(backendUrl);
        const url = `${backendUrl}/api/v1/auth/login`        
        try {
            const response = await axios.post(url, user)    
            return response.data
        } catch (error) {
            throw new Error(`There is error logging in because of ${error}`)            
        }
})

export {createUser, login}

