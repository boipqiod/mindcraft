import React from "react";
import {Routes, Route, HashRouter} from "react-router-dom";
import {AppLayout} from "../layout/AppLayout";
import {Main} from "../pages/Main";
import {SignIn} from "../pages/SignIn";
import {Register} from "../pages/Register";
import {Detail} from "../pages/Detail";
import {useAuth} from "../hooks/useAuth";
import {Create} from "../pages/Create";

export const AppRoutes = () => {
    const {auth} = useAuth()

    return (
        <HashRouter>
            <AppLayout>
                <Routes>
                    <Route path='/' element={<Main />}/>
                    <Route path='/test/:id' element={<Detail />}/>
                    <Route path='/test/:id/play' element={<Detail />}/>
                    <Route path='/create' element={auth ? <Create /> : <SignIn />}/>

                    <Route path='/signin' element={<SignIn />}/>
                    <Route path='/register' element={<Register />}/>
                    <Route path='/user' element={auth ? <Create /> : <SignIn />}/>
                </Routes>
            </AppLayout>
        </HashRouter>
    )
}
