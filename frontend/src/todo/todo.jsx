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
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh();
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/i` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
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
            .then(resp => this.refresh(this.state.description))
    }

    handleDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
            .then(resp => this.refresh(this.state.description))
    }

    handlePending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false})
            .then(resp => this.refresh(this.state.description))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh();
    }

    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Register" />
                <TodoForm handleAdd={this.handleAdd} description={this.state.description}
                    handleChange={this.handleChange} handleSearch={this.handleSearch} 
                    handleClear={this.handleClear} />
                <TodoList list={this.state.list} handlePending={this.handlePending}
                    handleDone={this.handleDone} handleRemove={this.handleRemove}/>
            </div>
        )
    }
}

export default Todo
