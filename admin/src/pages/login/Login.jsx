import './login.css'

const Login = () => {
    return(
        <main className='login'>
            <form>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <button className='btn'>Login</button>

            </form>
        </main>
    )
}

export default Login
