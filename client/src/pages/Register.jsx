import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { registrationSchema } from '../schema';
import axios from 'axios'
import { useEffect } from 'react';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
`

const Wrapper = styled.div`
    padding: 25px 5px;
    width:  max-content;
    height: max-content;
    background-color: lightgray;
    @media only screen and (max-width: 1024px){
        border: 1px solid gray;
        width: 75%;
        height: max-content;
   } 
    @media only screen and (max-width: 480px){
        border: 1px solid gray;
        width: 85%;
        height: max-content;
   }    
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`

const Form = styled.form`
    // display: block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 25%;
    
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

    &:focus{
        outline: 1px solid yellow;
    }
`

const Agreement = styled.p`
    font-size: 14px;
    margin: 10px;
    width: 75%;
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
    margin-left: 10px;
    margin-top: 5px;
`


const Register = () => {
    const url = 'http://localhost:3400/api/auth/register'
 

    const onSubmit = useEffect(() => {
        const regInfo = async () => {
            const res = await axios.post(url)
            res.data()
        }
        regInfo()
    }, [url])
  

    const  {handleChange, handleBlur, values,  errors, handleSubmit, touched } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }, 
        validationSchema: registrationSchema,
        onSubmit,
    })

    console.log(values)

  return (
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
                />
            {errors.fullName && touched.fullName && <Error>{errors.fullName}</Error>}
        

                    <Input 
                     value={values.email}
                    onChange={handleChange} 
                    name='email' 
                    type='email' 
                    placeholder='Email'
                    onBlur={handleBlur}
                    />
                    {errors.email && touched.email && <Error>{errors.email}</Error>}
  
                <Input 
                 value={values.password}
                onChange={handleChange} 
                name='password' 
                type='password' 
                placeholder='Password'
                onBlur={handleBlur}
                />
                {errors.password && touched.password && <Error>{errors.password}</Error>}
        
                <Input 
                 value={values.confirmPassword}
                onChange={handleChange}
                name='confirmPassword' 
                type='password' 
                placeholder='Confirm Password'
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
  )
}

export default Register


