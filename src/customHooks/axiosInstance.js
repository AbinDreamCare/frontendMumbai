import  axios  from 'axios';

const instance = axios.create({
    baseURL: 'http://3.7.252.48/'
})

export default instance