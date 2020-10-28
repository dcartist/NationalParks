import React, { Component } from 'react';
import listOfParks from "./data/parks.json"
import {Link} from "react-router-dom"
import "./Parks.css"
class Parks extends Component {
    render() {
        console.log("bring it in damn it")
        console.log(this.props)
        console.log(typeof this.props)
        console.log(this.props[0].name)
        Object.keys(this.props).forEach(key=>{
            console.log(key, this.props[key])
        })
        return (
            <div className="Base">

                {/* {listOfParks.map((park, index)=>(<Link to={"/park/"+park.parkCode}><div className="parkBase" style={{backgroundImage: 'url(' + park.images[0].url + ')', */}
                {listOfParks.map((park, index)=>(<Link to={"/park/"+park.parkCode}><div className="parkBase">
                    <div>
                    <div className="background">
                {park.states}
    </div><div className="parkTitle">{park.name}</div>
                    </div>
                    </div></Link>))}
               
            </div>
        );
    }
}

export default Parks;