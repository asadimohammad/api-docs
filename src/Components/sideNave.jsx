// @ts-nocheck
import React, { useEffect, useState } from "react";
import "#assets/styles/SideNav.css";
import { AiOutlineHome , AiOutlineComment } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { BiHotel } from "react-icons/bi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { PiChalkboardTeacher, PiStudent } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

const SideNav = () => {
    const [collapse, setCollapse] = useState(true);

    const divStyle = {
        visibility: !collapse ? "visible" : "hidden",
    };
    return (
        <div className={`sideNavOuter ${collapse ? "collapsed" : ""}`}>
            <div className={`sidenavContainer `}>
                <div className="logo">
                    <svg
                        width="30"
                        height="25"
                        viewBox="0 0 59 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="21.3311"
                            y="0.126953"
                            width="30.1667"
                            height="30.1667"
                            transform="rotate(45 21.3311 0.126953)"
                            fill="#E8ECFC"
                        />
                        <rect
                            x="37.5073"
                            y="3.53553"
                            width="25.1667"
                            height="25.1667"
                            transform="rotate(45 37.5073 3.53553)"
                            stroke="#3661ED"
                            strokeidth="5"
                        />
                    </svg>
                </div>
                <div
                    className="collapseIcon"
                    style={{
                        transform: collapse ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    onClick={() => setCollapse(!collapse)}
                >
                    <MdKeyboardArrowLeft size={23} />
                </div>
                <ul className="menuItems">
                    <li className="menu">
                        <div className="menuItemContainer">
                            <AiOutlineHome size={20} className="menuIcon" />
                            <span className="menuText" style={divStyle}>
                                Dashboard
                            </span>
                        </div>
                    </li>
                    <NavLink to="/users" className="menuText">
                        <li className="menu">
                            <div className="menuItemContainer">
                                <FiUsers size={20} className="menuIcon" />
                               <span style={divStyle}>Users</span> 
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to="/products" className="menuText">
                        <li className="menu">
                            <div className="menuItemContainer">
                                <CiShop size={20} className="menuIcon" />
                               <span style={divStyle}>Products</span> 
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to="/courses" className="menuText">
                        <li className="menu">
                            <div className="menuItemContainer">
                                <GoBook size={20} className="menuIcon" />
                               <span style={divStyle}>Courses</span> 
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to="/students" className="menuText">
                        <li className="menu">
                            <div className="menuItemContainer">
                                <PiStudent size={20} className="menuIcon" />
                               <span style={divStyle}>Stundents</span> 
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to="/teachers" className="menuText">
                        <li className="menu">
                            <div className="menuItemContainer">
                                <PiChalkboardTeacher
                                    size={20}
                                    className="menuIcon"
                                />
                               <span style={divStyle}>Teachers</span> 
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to="/guests" className="menuText">
                        <li className="menu">
                            <div className="menuItemContainer">
                                <BiHotel
                                    size={20}
                                    className="menuIcon"
                                />
                               <span style={divStyle}>Guests</span> 
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to="/comments" className="menuText">
                        <li className="menu">
                            <div className="menuItemContainer">
                                <AiOutlineComment
                                    size={20}
                                    className="menuIcon"
                                />
                               <span style={divStyle}>Comments</span> 
                            </div>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
