import React, {useEffect} from 'react'
import { withChildren } from '../types/common'

type authProvider = {
    auth: boolean,
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = React.createContext<authProvider | undefined>(undefined)

export const AuthProvider = ({children}: withChildren) => {
    const [auth, setAuth] = React.useState<boolean>(false);

    useEffect(() => {

    }, [])

    return (
        <AuthContext.Provider value={{
            auth, setAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}
