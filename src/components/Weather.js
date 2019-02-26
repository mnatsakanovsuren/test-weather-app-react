import React from 'react';

// class Weather extends Component {
//     render() {
//         return (
//             <div className="InfoSide">
//                 { this.props.city &&
//                     <div className="info-block">
//                         <p><b>City: </b>{this.props.city}</p>
//                         <p><b>Country: </b>{this.props.country}</p>
//                         <p><b>Temperature: </b>{this.props.temp} &deg;C</p>
//                     </div>
//                 }
//                 <p className="error-msg">{this.props.error}</p>
//             </div>
//
//
//         );
//     }
// }

const Weather = (props) => {
    return (
        <div className="InfoSide">
            { props.city &&
                <div className="info-block">
                    <p><b>City: </b>{ props.city }</p>
                    <p><b>Country: </b>{props.country}</p>
                    <p><b>Temperature: </b>{props.temp} &deg;C</p>
                </div>
            }
            <p className="error-msg">{props.error}</p>
        </div>


    );
}


export default Weather;