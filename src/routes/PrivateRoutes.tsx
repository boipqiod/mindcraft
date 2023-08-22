import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {usePage} from "../hooks/utils/usePage";
import {Create} from "../pages/Create";
import {SignIn} from "../pages/SignIn";

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
        <Routes>
            <Route path='/create' element={auth ? <Create /> : <SignIn />}/>
            <Route path='/user' element={auth ? <Create /> : <SignIn />}/>
        </Routes>
    )
}
