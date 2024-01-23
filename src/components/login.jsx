import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/thunks/userThunk";
const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailHandler = (e)=> {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const user = {email, password}
    
    const {logged, loggedIn} = useSelector((store)=>store.user)
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        dispatch(login(user))
        setEmail('')
        setPassword('')
    }
    // console.log(logged);
    // if (logged.length > 0) {
    //     return <p>Welcome {logged[0].msg.firstName}</p>
    // }
    return(
        <div className="flex items-center text-xl font-mono justify-center h-screen">
            {!loggedIn? (<div className="bg-blue-100 p-5 shadow-lg rounded-md w-[65vh]">
                <form onSubmit={handleLoginSubmit}>
                    <div className="mb-3 flex gap-8">
                        <label className="text-gray-600">Email</label>
                        <input 
                        type="text"
                        value={email}
                        onChange={emailHandler} 
                        className="w-[80%] ml-3 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div> 
                    <div className="mb-3 flex gap-3">
                        <label className="text-gray-600">Password</label>
                        <input type="text"
                        value={password}
                        onChange={passwordHandler} 
                        className="w-full rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div> 
                    <button className="text-white rounded-md w-[40%] mx-[45%] bg-blue-400 hover:bg-blue-500 p-2">Login</button>
                </form>
                <div className="flex gap-5 mt-5">
                    <p className="text-gray-600 italic">Not registered?</p><Link to='/register' className="text-gray-600 hover:text-blue-500 hover:underline">click here!</Link>
                </div>
            </div>): 
                (<p className="font-mono" >Welcome {logged[0].msg.firstName}</p>)
            }
        </div>
    )
}

export default Login;