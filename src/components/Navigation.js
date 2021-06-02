import React from 'react';
import { useState } from 'react';
import './Navigation.css';
import SecondaryNav from './SecondaryNavigation'



function Navigation() {
    const [clicked, setClick] = useState(true);
    const [menu, setMenu] = useState("inbox");

    return (
        <div className= "Navigation">
            <nav className = {clicked ? "SideNavigation active" : "SideNavigation"}>
               <div className = "menu-icon" onClick={() => setClick(!clicked)}>
                    <i className={'fas fa-bars'}></i>
                </div>
                <ul className= {clicked ? "nav-menu active" : "nav-menu"}>
                   <li>
                        <span className = {menu=="inbox" ? "nav-links active" : "nav-links"} onClick={() => menu=="inbox" ? setMenu("none") : setMenu("inbox")}>
                            <i class = "fas fa-inbox"></i> Inbox 
                        </span>
                    </li>
                    <li>
                        <span className = {menu=="resources" ? "nav-links active" : "nav-links"} onClick={() => menu == "resources" ? setMenu("none") : setMenu("resources")}>
                            <i class = "far fa-star"></i> Resources
                        </span>
                    </li>
                    <li>
                        <span className = {menu=="testcases" ? "nav-links active" : "nav-links"} onClick={() => menu == "testcases" ? setMenu("none") : setMenu("testcases")}>
                            <i class = "far fa-list-alt"></i> Test Cases
                        </span>
                    </li>
                    <li>
                        <span className = {menu=="deployment" ? "nav-links active" : "nav-links"} onClick={() => menu == "deployment" ? setMenu("none") : setMenu("deployment")}>
                            <i class="fas fa-rocket"></i>Deployment</span>
                    </li>
                </ul>
            </nav>
            {clicked ? 
                <div className = "secondaryNavigation active">
                    {menu=="inbox" ? <SecondaryNav/> : " "}
                </div> :
                <span className = "secondaryNavigation"></span>
            }
        </div>
        )
} export default Navigation