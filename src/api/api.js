import axios from 'axios'

const myAxios = axios.create({
    baseURL: "http://999.appetit.md/api"
});

myAxios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("ok")
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("error")
    return Promise.reject(error);
});

export default myAxios