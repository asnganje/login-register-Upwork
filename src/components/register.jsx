import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/thunks/userThunk";

const Register = () => {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const fNameChangeHandler = (e)=> {
        setFirstName(e.target.value)
    }

    const lNameChangeHandler = (e)=> {
        setLastName(e.target.value)
    }

    const emailChangeHandler = (e)=> {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = (e)=> {
        setPassword(e.target.value)
    }

    const {isRegistered, data} =useSelector((store)=>store.user)
    const user = {firstName, lastName, email, password}
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createUser(user))
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }
    return(
        <div className="flex items-center text-xl font-mono justify-center h-screen">
            {!isRegistered? (<div className="bg-blue-100 p-5 shadow-lg rounded-md w-[70vh]">
                <form onSubmit={submitHandler}>
                    <div className="mb-3 flex gap-5">
                        <label className="mt-1">Firstname</label>
                        <input 
                        type="text"
                        value={firstName}
                        onChange={fNameChangeHandler}
                        className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                        />
                    </div>
                    <div className="mb-3 flex gap-5">
                        <label className="mt-1">Lastname</label>
                        <input 
                        type="text" 
                        value={lastName}
                        onChange={lNameChangeHandler}
                        className="w-full ml-2.5 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-3 flex gap-5">
                        <label className="mt-1">Email</label>
                        <input 
                        value={email}
                        onChange={emailChangeHandler}
                        type="text"
                        className="w-full ml-11 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                        />
                    </div>
                    <div className="mb-3 flex gap-5">
                        <label className="mt-1">Password</label>
                        <input 
                        type="text"
                        value={password}
                        onChange={passwordChangeHandler}
                        className="w-full ml-2.5 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300" 
                        />
                    </div>
                    <button className="text-white rounded-md w-[50%] mx-[35%] bg-blue-400 hover:bg-blue-500 p-2">Register</button>
                </form>
                <div className="flex gap-5 mt-5">
                    <p className="text-gray-600 italic space-x-0">Already registered?</p><Link to='/' className="text-gray-600 hover:text-blue-500 hover:underline">Login here!</Link>
                </div>
            </div>):
            (<p className="font-mono">Successful registration of {data[0].msg.firstName}</p>)
            }
            </div>
    )
}

export default Register;