import React, { createContext, useContext, useState, useEffect } from 'react';
import { useInteraction } from '../UI/interactionListener';

const LoggedInUserContext = createContext({});
const TokenContext = createContext("");
const LoggedInContext = createContext("");


// Current User Logged In
export const LoggedInUserProvider = ({ children }) => {
    const initialUser = localStorage.getItem("user");
    const [loggedInUser, setLoggedInUser] = useState({});
    const interaction = useInteraction();

    useEffect(() => {
        if (localStorage.getItem("user") !== null) {
            if (initialUser) {
                try {
                    let user = JSON.parse(initialUser)
                    setLoggedInUser(user)
                } catch (error) {
                    setLoggedInUser({})
                }
            } else {
                setLoggedInUser({})
            }
        }
    }, [interaction]);

    return (
        <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {children}
        </LoggedInUserContext.Provider>
    );
};

export const useLoggedInUser = () => {
    return useContext(LoggedInUserContext);
};


// Token
export const TokenProvider = ({ children }) => {
    const initialToken = localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            if (initialToken) {
                try {
                    setToken(initialToken)
                } catch (error) {
                    setToken("")
                }
            }
        }
    }, []);

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    );
};

export const useToken = () => {
    return useContext(TokenContext);
};


// Logged In status
export const LoggedInProvider = ({ children }) => {
    const initialIsLoggedIn = localStorage.getItem("loggedIn");
    const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

    useEffect(() => {
        if (localStorage.getItem("loggedIn") !== null) {
            if (initialIsLoggedIn) {
                try {
                    let status = JSON.parse(initialIsLoggedIn)
                    setIsLoggedIn(status)
                } catch (error) {
                    setIsLoggedIn("")
                }
            } else {
                setIsLoggedIn("")
            }
        }
    }, []);

    return (
        <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </LoggedInContext.Provider>
    );
};

export const useLoggedIn = () => {
    return useContext(LoggedInContext);
};
