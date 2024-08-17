import React from 'react';
import Navigation from '../navigation';
// import Outlet
import {Outlet, useParams} from "react-router-dom"

const { type } = useParams()

const Root = () => {
    return (
        <>
            <Navigation/>
            {/* Add an Outlet*/}
            <Outlet/>
        </>
    );
};

export default Root;