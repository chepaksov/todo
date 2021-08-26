import React, {PureComponent} from 'react';
import {formatDistanceToNow} from 'date-fns';
// import classNames from "classnames";
// import PropTypes from "prop-types";

export default class TimeOfCreationTask extends PureComponent {
    state = {
        date: ''
    }
    componentDidMount() {
        this.getDate();
    };
    getDate = () => {
        let date = new Date();
        this.setState({date});
    }
render(){
    const {date}= this.props
    return (
        <form onSubmit={this.componentDidMount}>
        <span className="created">
            created {date}
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