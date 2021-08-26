import React, {PureComponent} from 'react';
import {formatDistanceToNow} from 'date-fns';

export default class TimeOfCreationTask extends PureComponent {
    state = {
        date: '',
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.getDate(), 0);
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    getDate = () => {
        let date = formatDistanceToNow(this.props.date, {addSuffix: true, includeSeconds: true});
        this.setState({date})
    };

    render() {
        const {date} = this.state;
        return (
            <form onSubmit={this.componentDidMount}>
        <span className="created">
            created {date}
        </span>
            </form>)
    };
};