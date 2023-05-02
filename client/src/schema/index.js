import * as yup from 'yup'

export const registrationSchema = yup.object().shape({
    email: yup
    .string()
    .email('Please enter a valid email')
    .required('This is a required field')
    .min(4, ['Email must be a minimum of 4 characters'])
    .max(25, ['Email must be not exceed 25 characters']),
    fullName: yup
    .string()
    .min(4, ['Email must be a minimum of 4 characters'])
    .max(25, ['Email must be not exceed 25 characters'])
    .required('Required'),
    password: yup
    .string()
    .required('Required')
    .min(4, ['Password must be a minimum of 4 characters'])
    .max(25, ['Password must be not exceed 25 characters']),
    confirmPassword:  yup
    .string()
    .required('Required')
    .oneOf([yup.ref(`password`)], 'Confirm password & Password must match')
})