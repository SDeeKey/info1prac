import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "../utils/routes";
import Home from "../Home/Home";
import Tables from "../tables/tables";
import Task2 from "../task2/task2";
import Task4 from "../Task4/Task4";
import Task3 from "../task3/task3";



const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.TASK1} element={<Tables/>}/>
        <Route path={ROUTES.TASK2} element={<Task2/>}/>
        <Route path={ROUTES.TASK3} element={<Task3/>}/>
        <Route path={ROUTES.TASK4} element={<Task4/>}/>
    </Routes>
);

export default AppRoutes;
