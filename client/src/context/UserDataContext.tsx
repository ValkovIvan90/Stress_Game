import { createContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/UseLocalStorage';

export type UserD = {
    _id: string;
    name: string;
}
type AppContextType = {
    userData: UserD;
    setUserData?: () => string | undefined;
}

const UserContext = createContext<AppContextType | null>(null);

type UserProviderChildren = {
    children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderChildren) => {

    const [userData, setUserData] = useLocalStorage('user', {
        _id: '',
        name: ''
    })
   
    const value = {
        userData: userData,
        setUserData : setUserData
    }
    return (
        <UserContext.Provider
            value={value}>
            {children}
        </UserContext.Provider>
    );
}


export default UserContext;