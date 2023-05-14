import * as yup from 'yup'

export const registrationSchema = yup.object().shape({
    fullName: yup
    .string()
    .required('Required')
    .min(4, ['Pls, provide your valid credential'])
    .max(25, ['This field should not exceed 25 characters']),
    email: yup
    .string()
    .email('Please enter a valid email')
    .required('This is a required field')
    .min(4, ['Email must be a minimum of 4 characters'])
    .max(25, ['Email must be not exceed 25 characters']),
    password: yup
    .string()
    .required('Required')
    .min(4, ['Password must be a minimum of 4 characters'])
    .max(25, ['Password must be not exceed 25 characters']),
    confirmPassword:  yup
    .string()
    .oneOf([yup.ref("password"), null], 'Password and confirm password must match')
    .required('Required')
    
})
