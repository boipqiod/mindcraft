import {useState} from "react";

export const useAuth = () => {
    const [auth, setAuth] = useState<boolean>(true)

    return {auth, setAuth}
}
