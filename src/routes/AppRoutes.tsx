import React from "react";
import {Routes, Route, HashRouter} from "react-router-dom";
import {AppLayout} from "../layout/AppLayout";
import {Main} from "../pages/Main";
import {SignIn} from "../pages/SignIn";
import {Register} from "../pages/Register";
import {Detail} from "../pages/Detail";
import {Create} from "../pages/Create";
import {Process} from "../pages/Process";

export const AppRoutes = () => {

    return (
        <HashRouter>
            <AppLayout>
                <Routes>
                    <Route path='/' element={<Main />}/>
                    <Route path='/test/:id' element={<Detail />}/>
                    <Route path='/test/:id/play' element={<Process />}/>

                    <Route path='/signin' element={<SignIn />}/>
                    <Route path='/register' element={<Register />}/>

                    <Route path='/create' element={<Create />}/>
                </Routes>
            </AppLayout>
        </HashRouter>
    )
}
