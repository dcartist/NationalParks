import React, { Component } from 'react';
import {Link} from "react-router-dom"
import Image from "./nationalpark.png"
import "./Navigation.css"

class Navigation extends Component {
    render() {
        return (
            <div className="navigationBar">
                <div><Link to="/"><img src={Image}></img></Link></div>
                <div><Link to="/"><h1>National Parks</h1></Link></div>
                
                
            </div>
        );
    }
}

export default Navigation;