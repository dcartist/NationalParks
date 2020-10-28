import React, { Component } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import "./Parks.css"
class Park extends Component {
    constructor(props){
        super()
        this.state={
            parkInfo:[],
            addresses:[],
            images:[]
        }
    }
    componentDidMount(){
        let url = `https://developer.nps.gov/api/v1/parks?parkCode=${this.props.match.params.id}&api_key=Ah8yVe5IpfMfOXKhge1U9Kan4Qc8KhcjNhVydTSm`
        console.log(url)
        axios.get(url).then(results=>{
            console.log(results.data.data[0].contacts.emailAddresses[0].emailAddress)
            this.setState({parkInfo:results.data.data[0], addresses: results.data.data[0].addresses[0], images:results.data.data[0].images})
            console.log(this.state.parkInfo)
        })
    }

    render() {
        
        return (
            <div className="parkDetails">
                <h1>{this.state.parkInfo.fullName}</h1>
                <section>
                <h3>Description:</h3>
                <p>{this.state.parkInfo.description}</p>
                <h3>Directions:</h3>
                <p>{this.state.parkInfo.directionsInfo}</p>
                <h3>Weather Info:</h3>
                <p>{this.state.parkInfo.weatherInfo}</p>
                </section>
               <section>
                {this.state.images.map((image, index)=>(<div className="parkPictures"><img src={image.url}></img></div>))}
               </section>
               <section>
                  <Link to="/"> <button>Return to main page</button></Link>
               </section>
            </div>
        );
    }
}

export default Park;