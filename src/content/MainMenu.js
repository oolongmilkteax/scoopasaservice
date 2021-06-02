import React, { Component } from 'react';
import './MainMenu.css'
import mainmenuimage from '../Image/mainmenu.png'

class MainMenu extends Component {
    render() {
        return (
            <div className = "mainmenu">
            <div className = "mainheader" >
                <input 
                    className = "tobar"
                    placeholder = "To: Type the name of the person or group"
                />
            </div><br/>
            <div className = "maincontent">
                <span className = "maintext">Easily manage your messages<br/>on the fly</span>
                <p className = "bodytext">
                    Lorem ipsum dolor sit amet, ius ei alia omnis, ut audire<br/>
                    bonorum ullamcorper cum, ei mazim scaevola consulatu per. <br/>
                    Viris congue debitis in pri.
                </p>
                <img src = {mainmenuimage}></img>
            </div>
            </div>
        )
    }
} export default MainMenu