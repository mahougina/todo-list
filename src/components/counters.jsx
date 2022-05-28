import { Tab } from 'bootstrap';
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        return (
        <div> 
            <button 
                onClick = {this.props.onAdd}
                className = "btn btn-primary btn-sm m-2"> add </button> 
            <button 
                onClick = {this.props.onReset}
                className = "btn btn-primary btn-sm m-2"> reset </button> 
            {this.props.counters.map(counter => 
                <Counter 
                    key = {counter.id} 
                    onDelete = {this.props.onDelete} 
                    onIncrement = {this.props.onIncrement}
                    counter = {counter}
                    onCheck = {this.props.onCheck}
                    onSetTask = {this.props.onSetTask}
                />)} 
        </div>);
    }
}
 
export default Counters;