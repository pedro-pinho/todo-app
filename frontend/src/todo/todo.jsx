import React, { Component } from "react"
import axios from "axios"

import PageHeader from "../template/pageHeader.jsx"
import TodoForm from "./todoForm.jsx"
import TodoList from "./todoList.jsx"

const URL = 'http://localhost:3003/api/todos'
class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handlePending = this.handlePending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh();
    }

    refresh() {
        const list = [];
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    handleDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
            .then(resp => this.refresh())
    }

    handlePending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false})
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Register" />
                <TodoForm handleAdd={this.handleAdd} description={this.state.description} handleChange={this.handleChange} />
                <TodoList list={this.state.list} handlePending={this.handlePending} handleDone={this.handleDone} handleRemove={this.handleRemove}/>
            </div>
        )
    }
}

export default Todo
