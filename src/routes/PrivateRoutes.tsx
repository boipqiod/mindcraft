import React, {useEffect} from "react";
import {Route} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {usePage} from "../hooks/utils/usePage";

export const PrivateRoutes = () => {
    const {auth} = useAuth()
    const {toMain} = usePage()
    useEffect(() => {
        if (!auth) {
            alert('로그인이 필요한 서비스 입니다.')
            toMain()
        }
    }, [])

    return (
        <Route>
        </Route>
    )
}
