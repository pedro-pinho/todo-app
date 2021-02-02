import React, { Component } from "react";
import PageHeader from "../template/pageHeader.jsx"
import TodoForm from "./todoForm.jsx"
import TodoList from "./todoList.jsx"

class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Register" />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}

export default Todo
