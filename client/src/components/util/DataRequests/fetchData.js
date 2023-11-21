import axios from 'axios';

const config = (method, endpoint, token, payload) => {
    const requestConfig = {
        method: method,
        maxBodyLength: Infinity,
        url: `https://codegeniuss-9493c6d0482e.herokuapp.com/api/${endpoint}`,
        // url: `http://localhost:5000/api/${endpoint}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    if (method === "post" || method === "patch") {
        requestConfig.data = payload;
    }

    return requestConfig;
};

const requestDataOf = {
    request: async (method, endpoint, token, payload) => {
        return axios.request(config(method, endpoint, token, payload))
    }
};

export default requestDataOf;