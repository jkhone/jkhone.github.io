import React, { useState } from "react"
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'
import '../styles/login.css'

export default function Login(props){
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const { signin } = useAuth()


function handleSubmit(e){
    e.preventDefault()
    signin(username, password).then(resp =>{
        props.history.push('/')
    })
}
    return(
        <div className='formcontainer'>
            <div className='login'>
                {/* <Link to='/register' >Don't have an account? Register Here!</Link> */}
                <div className="title">Login</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="UserPass" htmlFor='username' >Username</label>
                        <input
                        type="text" 
                        name="username" 
                        value={username} 
                        required
                        onChange={e => setUsername(e.target.value)}/> 
                    </div>
                    <div>
                        <label className="UserPass" htmlFor='password'>Password</label>
                        <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        required
                        onChange={e => setPassword(e.target.value)}/> 
                    </div>
                    <button className="LogReg" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}