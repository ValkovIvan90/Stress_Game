import { createContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/UseLocalStorage';

type AppContextType = {
    userData: {
        _id: string;
        name: string;

    }
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

    return (
        <UserContext.Provider
            value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
}


export default UserContext;