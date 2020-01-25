// import React, { useContext } from 'react';
// import { AuthContext } from '../AuthContext'
import Axios from 'axios'

// const { isAuth, setIsAuth } = useContext(AuthContext);

const Auth = {
    authenticate() {
        Axios.get('api/auth/user_data')
            .then(response => {
                if (response.data.email) {
                    console.log('Auth.authenticate: ', true)
                    // setIsAuth(true)
                    return true
                } else {
                    console.log('Auth.authenticate: ', false)
                    // setIsAuth(false)
                    return false
                }
            })
    },
    async logout() {
        Axios.get('/api/auth/logout')
            .then(response => {
                console.log("logout response: ", response)
                // setIsAuth(false)
            })
            .catch(err => console.log(err));
    }
}

export default Auth;