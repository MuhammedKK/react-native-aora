import {createContext, useContext, useState, useEffect} from 'react'
import { getUser } from '../lib/appwrite';
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);


    // Effect
    useEffect(() => {
        getUser().then((res) => {
            if(res) {
                setIsLoggedIn(true);
                setUser(res);
            } else {
                setIsLoggedIn(false);
                setUser(null);
            }
        }).catch((err) => {
            console.log(err);
        });
    }, [])
    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser,
                setLoading,
                loading
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}