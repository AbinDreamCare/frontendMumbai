import  axios  from 'axios';

const instance = axios.create({
    baseURL: process.env.base_url_axios
})

// const instance = axios.create({
//     baseURL: 'http://localhost:7000/'
// })

export default instance