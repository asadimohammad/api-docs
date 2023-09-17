import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideNav from "../sideNave";
import "#assets/styles/main-layout.css";

const MainLayout = () => {
    const {pathname} = useLocation()
    let path = pathname.substring(1)
    return (
        <div className="main d-flex">
            <SideNav />
            <div className="main-content">
                <header className="p-6 w-100 d-flex gap-6 jc-sb align-center">
                    <h2>{path}</h2>
                    <p className="ml-6">BASE URL: <span>https://api-wins.iran.liara.run/api</span></p>
                    <p>Api Document <span> ©Wins Academy</span></p>
                </header>
                <div className="content p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
