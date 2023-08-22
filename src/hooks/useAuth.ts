import {useState} from "react";

export const useAuth = () => {
    const [auth, setAuth] = useState<boolean>(false)

    return {auth, setAuth}
}
