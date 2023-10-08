import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import './Register.css'

export default function Login(){
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    
    const { dispatch } = useAuthContext();

    const loginUser = async (e) => {
        e.preventDefault()
        const { email, password } = data
        try{
            const {data} = await axios.post('/login', {
                email,
                password
            });
            if(data.error) {
                toast.error(data.error)
            } else {
                console.log(data);
                dispatch({type: 'LOGIN', payload: {
					accessToken: data.token,
					name: data.name,
                    role: data.role
				}})
				localStorage.setItem("User", JSON.stringify({
					accessToken: data.token,
					name: data.name,
                    role: data.role
				}));
                setData ({});
                toast.success('Login Successful. Welcome!');
                navigate('/')
            }
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div>
            <form onSubmit={loginUser} >
                <div className='registerUser-form'>
                    <div className='registerUser-container'>
                        <div className='left-register'>
                            <h1>Login</h1>
                            <label>Email</label>
                            <input type="email" id="email" placeholder="enter email..." value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                            <label>Password</label>
                            <input type="password" id='password' placeholder="enter password..." value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                            <p>New here?<Link className='link' to='/register'>Sign Up</Link> </p>         
                            <button className='confirm-btn' type='submit'>Login</button>
                        </div>
                        <div className='right-register'>
                            <img src="../images/logging.jpg" alt="" width={200} height={200}/> 
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
        
    )
}