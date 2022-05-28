import React, { Component } from 'react';

class Counter extends Component {
    //set styles, can call this.styles into a style attribute
    styles = {
        fontSize: 0,
        fontWeight: 'bold'
    };

    getBadgeType() {
        let classes = "badge m-2 bg-";

        //if the current state is 0, return warning, else return primary 
        classes += (this.props.counter.notDone === true) ? "primary" : "danger";
        return classes;
    }

    formatCount() {
        const { notDone: count } = this.props.counter;
        return count === false ? ":)" : ":(";
    }

    render() { 
        return (
            <div>
                <input type="checkbox" id="box" name="box" value="yes" onClick={() => this.props.onCheck(this.props.counter)}/>
                <span className={this.getBadgeType()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className= "btn btn-secondary btn-sm">
                        Increment
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className='className = "btn btn-danger btn-sm m-2'> 
                        remove 
                </button>
            </div>
        );
    }
}
 
export default Counter;