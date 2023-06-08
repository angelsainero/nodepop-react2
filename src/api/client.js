import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NzgyNWMyYy1hODBlLTQ1ZWYtODE3MS1hZTA5NjliN2M5ZjkiLCJpYXQiOjE2ODYwNzY2NzAsImV4cCI6MTcxNzYzNDI3MH0.yx_9BYKR3PQW626oVqh7uZvK1U73Kr-_A9hsk72LXxw'

const client = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {'Authorization': 'Bearer '+ token}
    
})

client.interceptors.response.use(response => response.data)

export default client;