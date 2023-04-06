import axios from 'axios'

const  BASE_URL = 'http://localhost:3400/api'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTUxYmIyMWI3NWMwZmUyNjgxZjM2MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDc0ODQ2NCwiZXhwIjoxNjgxMDA3NjY0fQ.cRopW_g-I5yDgBrcyk5VeYqmEZj5hcDVZMdMpP_YGvo'

export const publicRequest = axios.create({
    base_url: BASE_URL,
})

export const userRequest = axios.create({
    base_url: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})