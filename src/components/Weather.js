import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
            <div className="InfoSide">
                { this.props.city &&
                    <div className="info-block">
                        <p><b>City: </b>{this.props.city}</p>
                        <p><b>Country: </b>{this.props.country}</p>
                        <p><b>Temperature: </b>{this.props.temp} &deg;C</p>
                    </div>
                }
            </div>


        );
    }
}


export default Weather;