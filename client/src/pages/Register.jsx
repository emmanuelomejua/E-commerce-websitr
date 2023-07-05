import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { registrationSchema } from '../schema';
import axios from 'axios'
import './error.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    background-image: url('https://img.ssensemedia.com/images/f_auto,q_auto:best/222451F048073_1/gucci-beige-large-attache-shoulder-bag.jpg');
`

const Wrapper = styled.div`
    padding: 25px 5px;
    width:  max-content;
    height: max-content;
    color: #222;
    font: 12px bold;
    background-color: lightgray;
    @media only screen and (max-width: 1024px){
        padding: 10px;
   } 
    @media only screen and (max-width: 550px){
        border: 1px solid gray;
        width: 85%;
        height: max-content;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 0;
   }    
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 10px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 25%;
    @media only screen and (max-width: 550px){
        margin: auto;
   }  
`

const Wrap = styled.div`
   display: flex;
   flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    padding: 15px;
    border: none;
    height: 40px;
    outline: none;
    margin: 10px;
    width: 300px;
    @media only screen and (max-width: 550px){
        width: 240px;
   }
`

const Agreement = styled.p`
    font-size: 14px;
    margin: 10px;
    width: 75%;
    @media only screen and (max-width: 550px){
        font-size: 10px;
        color: #222;
   }
`

const Button = styled.button`
    border: none;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    width: max-content;
    margin-left: 10px;


    &:hover{
        background-color: blue;
        color: white;
        transition: all .5s ease;
    }
`

const P = styled.p`
    margin: 10px 0;
    font-size: 14px;
`
const Link1 = styled.span`
    margin: 10px 0;
    font-size: 14px;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
`

const Error = styled.span`
    color: crimson;
    font-size: 12px;
    margin-left: 12px;
    margin-top: 2.5px;
    @media only screen and (max-width: 550px){
       margin-top: 1px;
       font-size: 8px;
   }
`


const Register = () => {
    const url = 'http://localhost:3400/api/auth/register'

    const toastOptions = {
        position: 'bottom-right',
        draggable: true,
        pauseOnHover: true,
        autoClose: 8000,
        theme: 'light',
        // color: '#222'
    }


    const onSubmit = async () => {
        const {fullName, email, password} = values
        try{
            const res = await axios.post(url, {
                fullName,
                email,
                password
            })
            res.data && window.location.replace('/login')
        }catch(err){
           toast('Please enter a valid details to register, or login if account already exist', toastOptions)
        }

    }
  

    const  {handleChange, handleBlur, values,  errors, handleSubmit, touched } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }, 
        validationSchema: registrationSchema,
        onSubmit
    })

    console.log(values)

  return (
    <>
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          
                <Input 
                    value={values.fullName}
                    onChange={handleChange} 
                    name='fullName' 
                    type='text' 
                    placeholder='FullName' 
                    onBlur={handleBlur}
                    className={errors.fullName ? "input-error" : ''}
                />
            {errors.fullName && touched.fullName && <Error>{errors.fullName}</Error>}

                    <Input 
                        value={values.email}
                        onChange={handleChange} 
                        name='email' 
                        type='email' 
                        placeholder='Email'
                        onBlur={handleBlur}
                        className={errors.email ? "input-error" : ''}
                        />
                    {errors.email && touched.email && <Error>{errors.email}</Error>}
  
                <Input 
                    value={values.password}
                    onChange={handleChange} 
                    name='password' 
                    type='password' 
                    placeholder='Password'
                    onBlur={handleBlur}
                    className={errors.password ? "input-error" : ''}
                    />
                {errors.password && touched.password && <Error>{errors.password}</Error>}
        
                <Input 
                    value={values.confirmPassword}
                    onChange={handleChange}
                    required
                    name='confirmPassword' 
                    type='password' 
                    placeholder='Confirm Password'
                    pattern={values.password}
                    className={errors.confirmPassword ? "input-error" : ''}
                    />
               {errors.confirmPassword && touched.confirmPassword && <Error>{errors.confirmPassword}</Error>}


            <Wrap>
            <Agreement>
                By creating an account, I consent to the processing of my data in accordance with the <strong>PRIVACY POLICY</strong>
            </Agreement>
            <Button type='submit'>CREATE</Button>
            <P>Already have an account? <Link to ='/login'><Link1>Login</Link1></Link></P>
            </Wrap>

        </Form>
      </Wrapper>
    </Container>
    <ToastContainer/>
    </>
  )
}

export default Register


