import React, {PureComponent} from 'react';
import {formatDistanceToNow} from 'date-fns';
// import classNames from "classnames";
// import PropTypes from "prop-types";

export default class TimeOfCreationTask extends PureComponent {
    state = {
        date: ''
    }
    componentDidMount() {
       setInterval(()=> this.getDate(),500)
    };
    getDate = () => {
        let date = new Date();
        this.setState({date});
    }
render(){
    console.log(new Date())
    console.log(this.state.date)
    return (
        <form onSubmit={this.componentDidMount}>
        <span className="created">
            {/*created {formatDistanceToNow(this.state.date, { addSuffix: true })}*/}
        </span>
        </form>
    )

}
}

// componentDidMount() {
//     this.getDate();
// };
// getDate = () => {
//     let date = formatDistanceToNow(new Date(), {
//         addSuffix: true,
//         includeSeconds: true
//     })
//     this.setState({date});
// }