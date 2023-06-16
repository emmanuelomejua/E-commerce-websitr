import { useDispatch } from 'react-redux'
import './login.css'
import { useState } from 'react'
import { login } from '../../redux/apiCalls'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch(email, password))
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
