import React, { createContext, useReducer, useEffect } from 'react';
import UserReducer from './userReducer';

// Initial state
const initialState = {
    user: null,
    isAuthenticated: false,
};

// Create context
const UserContext = createContext(initialState);


function UserProvider({ children }) {
    const [state, dispatch] = useReducer(UserReducer, initialState);


    useEffect(() => {
        dispatch({ type: 'INITIALIZE_USER' });
    }, []);

    //create user
    function createUser(user) {

        const storedUser = JSON.parse(localStorage.getItem('user')); //retrieve localstorage user

        console.log(user.name);
        if (storedUser && storedUser.name !== user.name) {
            // If the stored user's name is different from the new user's name, clear the favorites
            dispatch({ type: 'CLEAR_FAVORITES' });
            localStorage.removeItem('favorites');
        }


        dispatch({
            type: 'CREATE_USER',
            payload: user,
        });
    }

    //delete user
    function deleteUser() {
        dispatch({
            type: 'DELETE_USER',
            payload: "",
        });
    }

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                isAuthenticated: state.isAuthenticated,
                createUser,
                deleteUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };