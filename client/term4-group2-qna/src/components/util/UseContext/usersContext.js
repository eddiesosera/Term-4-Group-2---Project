import React, { createContext, useContext, useState, useEffect } from 'react';
import getDataOf from '../DataRequests/fetchData';
import requestDataOf from '../DataRequests/fetchData';
import { useToken } from './loggedInUserContext';


// Use Context Creator
const UsersContext = createContext([]);


// Users Context
export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const { token } = useToken();

    useEffect(() => {
        // Initialize users from session storage
        const storedUsers = sessionStorage.getItem('users');
        requestDataOf
            .request("get", "getUsers", token, "")
            .then((response) => {
                const newUsers = response?.data;
                sessionStorage.setItem('users', JSON.stringify(newUsers));
                setUsers(newUsers);
            });
    }, []);

    return (
        <UsersContext.Provider value={{ users, setUsers }}>
            {children}
        </UsersContext.Provider>
    );
};

export const useUsers = () => {
    return useContext(UsersContext);
};
