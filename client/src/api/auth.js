import axios from 'axios'


export const signup = async (data) => {
    const config = {
        Headers:{
            'Content-Type':'application/json'
        }, 
    };

    //server does bring back either success or error
    const response = await axios.post('/api/auth/signup', data,config);

    //that message will store in response
    return response;
};