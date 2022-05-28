import NavBar from './components/navbar'
import Counters from './components/counters';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {  
    counters: [
        { id: 1, notDone: true },
    ]
}; 

handleIncrement = counter => {
  const counters = [...this.state.counters];
  const i = counters.indexOf(counter);
  counters[i] = {...counter};
  //counters[i].notDone;
  this.setState({ counters });
};

handleDelete = (counterId) => {
  const counters = this.state.counters.filter(c => c.id !== counterId);
  this.setState({ counters });
};

handleReset = () => {
  const counters = this.state.counters.map(c => {
    c.notDone = true;    

    //reset checkboxes
    var checkboxes = document.getElementsByName('box');
    for (var uncheck of checkboxes) {
      uncheck.checked = false;
    }

    return c;
  });
  alert("all tasks are reset");
  this.setState({ counters });
};

handleAdd = counter => {
  const counters = [...this.state.counters];
  const index = counters.length+1;
  counters.push({id: index, notDone: true});
  this.setState({ counters });
}

handleCheck = counter => {
  var box = document.getElementById("box");
  const counters = [...this.state.counters];
  const i = counters.indexOf(counter);

  if (box.checked) {
    alert("all done! :)");
    counters[i].notDone = false;
    this.setState({ counters });
  } 
  else {
    alert("get back to work >:(");
    counters[i].notDone = true;
    this.setState({ counters });
  }
};

handleSetTask = counterId => {
  const counters = [...this.state.counters];
  const singleTask = this.state.counters.find(c => c.id !== counterId);
  
  //set textfield value
  document.getElementById("task").setAttribute = true;

  this.setState({ counters });
}

  render() {
    return ( 
      <React.Fragment>
      <NavBar 
        totalCounters = {this.state.counters.filter(c => c.notDone !== false).length} 
      />
      <main className = "containter">
          <Counters 
            counters = {this.state.counters}
            onReset = {this.handleReset}
            onIncrement = {this.handleIncrement}
            onDelete = {this.handleDelete}
            onAdd = {this.handleAdd}
            onCheck = {this.handleCheck}
            onSetTask = {this.handleSetTask}
          />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
