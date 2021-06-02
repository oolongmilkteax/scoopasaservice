import React from 'react';
import { useState } from 'react';
import './SecondaryNavigation.css'

function SecondaryNavigation() {
    const [item, setItem] = useState("customersatisfaction")

    return(
        <nav className = "SecondaryNavigation">
            <div className = "secondnavheader" >
                <input 
                    className = "searchbar"
                    placeholder = "      Search Messages"
                />
                <i className = "fas fa-search"></i> 
                <i class="far fa-edit"></i>
            </div>
            <a href = "./"> 
            <div className = {item == "customersatisfaction" ? "card active": "card"} onClick = {() => setItem("customersatisfaction")}>
                <span className = {item == "customersatisfaction" ? "bar" : "none"}>B</span><br/>
                <span className = "title">Customer Satisfaction</span>
                <span className = "rating">1.2k</span><br/>
                <p className = "para">
                    <span className = "text">Great to hear from you the</span><br/> 
                    <span className = "text">other day! Would you like...</span><br/>
                </p>
                <i class="far fa-image"></i>
            </div>
            </a>
            <div className = {item == "netpromoterscore" ? "card active": "card"}  onClick = {() => setItem("netpromoterscore")}>
                <span className = {item == "netpromoterscore" ? "bar" : "none"}>B</span><br/>
                <span className = "title">Net Promoter Score</span>
                <span className = "rating">1.8k</span><br/>
                <p className = "para">
                    <span className = "text">Great to hear from you the</span><br/> 
                    <span className = "text">other day! Would you like...</span><br/>
                </p>
                <i class="far fa-image"></i>
            </div>
            <div className = {item == "userpoll" ? "card active": "card"}  onClick = {() => setItem("userpoll")}>
                <span className = {item == "userpoll" ? "bar" : "none"}>B</span><br/>
                <span className = "title">User Poll</span>
                <span className = "rating">5k</span><br/>
                <p className = "para">
                    <span className = "text">Great to hear from you the</span><br/> 
                    <span className = "text">other day! Would you like...</span><br/>
                </p>
                <i class="far fa-image"></i>
            </div>
            <div className = {item == "marketresearch" ? "card active": "card"}  onClick = {() => setItem("marketresearch")}>
                <span className = {item == "marketresearch" ? "bar" : "none"}>B</span><br/>
                <span className = "title">Market Research</span>
                <span className = "rating">3.2k</span><br/>
                <p className = "para">
                    <span className = "text">Great to hear from you the</span><br/> 
                    <span className = "text">other day! Would you like...</span><br/>
                </p>
                <i class="far fa-image"></i>
            </div>
            <div className = {item == "engagementresults" ? "card active": "card"}  onClick = {() => setItem("engagementresults")}>
                <span className = {item == "engagementresults" ? "bar" : "none"}>B</span><br/>
                <span className = "title">Engagement Results</span>
                <span className = "rating">3.2k</span><br/>
                <p className = "para">
                    <span className = "text">Great to hear from you the</span><br/> 
                    <span className = "text">other day! Would you like...</span><br/>
                </p>
                <i class="far fa-image"></i>
            </div>
        </nav>
    )
} export default SecondaryNavigation