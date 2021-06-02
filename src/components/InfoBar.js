import React, { Component } from 'react';
import './InfoBar.css'

class InfoBar extends Component {
    render() {
        return (
            <div className = "infobar">
                <img className= "profilepic"
                    src = {this.props.image} 
                    alt = "Profile Picture"
                ></img><br/>
                <i class="fas fa-info"></i><br/>
                <i class="fas fa-external-link-alt"></i>
            </div>
        )
    }
} export default InfoBar