import React, {PureComponent} from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';

export default class TaskFilter extends PureComponent {
    static defaultProps ={
        selected: false,
        onToggleSelected: ()=> {console.log('function onToggleSelected not passed')},
        label: '',
    };
    static propTypes = {
        label: PropTypes.string,
        selected: PropTypes.bool,
        onToggleSelected: PropTypes.func
    };
    render() {
        const {label, selected, onToggleSelected} = this.props;
        return (
            <button className={classNames({selected})}
                    onClick={onToggleSelected}>{label}
            </button>
        );
    };
};