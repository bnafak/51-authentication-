/* eslint-disable no-undef */
import { createContext } from "react";
import PropTypes from 'prop-types';

export  const AuthContext = createContext (null);
const authInfo = { name : " Bangladesh may live long"}

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children : PropTypes.node
};