import React, { Component } from 'react';
import './App.css';

import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "121490ccbee361db52c8702b0087bab1";

class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  }



  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;


    if(city !== "") {
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);

        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            error: undefined
        });
    } else {
        this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            error: "Enter the name of the city"
        });

    }
  }


  render() {
    return (
      <div className="App">
        <Info/>
        <Form getWeather={this.getWeather}/>
        <Weather
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            error={this.state.error}/>
      </div>
    );
  }
}

export default App;
