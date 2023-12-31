import React from "react";

import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleOnClickAddToDo = (event) => {
    if (!this.state.title) {
      toast.warn("Please enter something");

      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };

  handleEnterAddToDo = (event) => {
    if (event.keyCode === 13 || event.keyCode === "Enter") {
      this.handleOnClickAddToDo();
    }
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new task"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
          onKeyDown={(event) => this.handleEnterAddToDo(event)}
        />
        <button
          type="button"
          className="btn-add-todo"
          onClick={(event) => this.handleOnClickAddToDo(event)}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
