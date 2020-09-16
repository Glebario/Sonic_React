import axios from "axios";

export default function tokenInterceptor(token: string) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}


const setInterceptors = () => {
    axios.defaults.headers.common['Token'] = localStorage.getItem("token");
    axios.defaults.headers.common['Device'] = "device";


    axios.interceptors.response.use(response => {
        return response;
    }, err => {
        return new Promise((resolve, reject) => {
            const originalReq = err.config;
            if ( err.response.status === 401 && err.config && !err.config.__isRetryRequest ) {



            }


            return Promise.reject(err);
        });
    });
};
