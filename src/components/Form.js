import React from 'react';

// class Form extends Component {
//     render() {
//         return (
//             <div className="FormSide">
//                 <form onSubmit={this.props.getWeather}>
//                     <input type="text" name="city" placeholder="Enter city"/>
//                     <button>Show weather</button>
//                 </form>
//             </div>
//
//         );
//     }
// }

const Form = (props) => {
    return (
        <div className="FormSide">
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="Enter city"/>
                <button>Show weather</button>
            </form>
        </div>

    );
}


export default Form;