import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
            <div>
                { this.props.city &&
                    <div className="info-block">
                        <p><b>City: </b>{this.props.city}</p>
                        <p><b>Country: </b>{this.props.country}</p>
                        <p><b>Temperature: </b>{this.props.temp}</p>
                    </div>
                }
            </div>


        );
    }
}


export default Weather;