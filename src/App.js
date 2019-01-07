import React, { Component } from "react";

import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out trash",
        completed: false
      },
      {
        id: 2,
        title: "Check emails",
        completed: false
      },
      {
        id: 3,
        title: "Create an application",
        completed: false
      }
    ]
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
