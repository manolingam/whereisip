import React, { Component } from 'react';
import './App.css';
import city from './assets/city.png';
import region from './assets/region.png';
import country from './assets/country.png';
import lat from './assets/lat.png';
import long from './assets/long.png';
import postal from './assets/postal.png';
import org from './assets/org.png';

class App extends Component {

  constructor(){
    super();
    this.state = {
      city:"-",
      region:"-",
      country:"-",
      postal:"-",
      lat:"-",
      long:"-",
      org:"" // removed extra dash at the end of the results
    };
}

  getInfo = () => {
   var ip = document.getElementById('ip').value;
   fetch(`https://ipapi.co/${ip}/json/`)
   .then(res => res.json())
   .then(result => {this.setState({ city:result.city,
                                    region:result.region,
                                    country:result.country_name,
                                    postal:result.postal,
                                    lat:result.latitude,
                                    long:result.longitude,
                                    org:result.org,});

    });
  }

  render() {
     if(this.state.city !== undefined) {
          return (
            <div className="App">
                <h1>Where is IP<span> ?</span></h1>
                <input type="text" id='ip' placeholder='Enter IP..'></input>
                <button onClick={this.getInfo}>Get IP Info</button>
                <div className="result">
                  <img src={city} alt="city"/><p>{this.state.city}</p>
                  <img src={region} alt="region"/><p>{this.state.region}</p>
                  <img src={country} alt="country"/><p>{this.state.country}</p>
                  <img src={postal} alt="postal"/><p>{this.state.postal}</p>
                  <img src={lat} alt="latitude"/><p>{this.state.lat}</p>
                  <img src={long} alt="longitude"/><p>{this.state.long}</p>
                  <img src={org} alt="organization"/><p>{this.state.org}</p>
                </div>
              </div>
          )
        } else if(this.state.city === undefined) {
            return(
              <div className="App">
              <input type="text" id='ip' placeholder='Enter IP..'></input>
              <button onClick={this.getInfo}>Get IP Info</button>
              <div className="result">IP address is either Invalid or Reserved!</div>
            </div>
            )
        } 
    } 

  }

export default App;
