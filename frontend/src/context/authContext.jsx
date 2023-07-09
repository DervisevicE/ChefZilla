import { createContext, useReducer, useEffect } from 'react';


export const AuthContext = createContext();

export const authReducer = function (state, action) {
    switch (action.type) {
        case 'LOGIN':
            console.log(action.payload);
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null,
            }
        case 'UPDATE_USER':
            return {
                user: action.payload,
            }
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            dispatch({
                type: 'LOGIN',
                payload: user
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}