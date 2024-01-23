import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const backendUrl = "https://loginbackend-m081.onrender.com"
// import.meta.env.REACT_APP_BACKEND_URL;

const createUser = createAsyncThunk('user/createUser', async (user)=> {
        const url = `${backendUrl}/api/v1/auth/register`
        try {
            const response = await axios.post(url, user)
            return response.data           
        } catch (error) {
            throw new Error(`Could not add user because of ${error}`)
        }

})
const login = createAsyncThunk('user/login', async (user)=> {
        const url = `${backendUrl}/api/v1/auth/login`        
        try {
            const response = await axios.post(url, user)    
            return response.data
        } catch (error) {
            throw new Error(`There is error logging in because of ${error}`)            
        }
})

export {createUser, login}

