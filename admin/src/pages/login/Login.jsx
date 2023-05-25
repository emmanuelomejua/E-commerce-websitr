import './login.css'
import { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
    }
    
    return(
        <main className='login'>
            <form>
            <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button className='btn' onClick={handleClick}>Login</button>

            </form>
        </main>
    )
}

export default Login
