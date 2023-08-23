import React from "react";
import {Routes, Route, HashRouter, BrowserRouter} from "react-router-dom";
import {AppLayout} from "../layout/AppLayout";
import {Main} from "../pages/Main";
import {SignIn} from "../pages/SignIn";
import {Register} from "../pages/Register";
import {Detail} from "../pages/Detail";
import {PrivateRoutes} from "./PrivateRoutes";

export const AppRoutes = () => {

    return (
        <HashRouter  basename="/mindcraft/build">
            <AppLayout>
                <Routes>
                    <Route path='/' element={<Main />}/>
                    <Route path='/test/:id' element={<Detail />}/>
                    <Route path='/test/:id/play' element={<Detail />}/>

                    <Route path='/signin' element={<SignIn />}/>
                    <Route path='/register' element={<Register />}/>

                    <Route path='/creact' element={<PrivateRoutes />}/>
                </Routes>
            </AppLayout>
        </HashRouter>
    )
}
