import React from "react"
import IconButton from "../template/iconButton.jsx"

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'done' : '' }>
                    {todo.description}
                </td>
                <td className="buttons">
                    <IconButton style='success' icon='check' onClick={() => props.handleDone(todo)} hide={todo.done}/>
                    <IconButton style='warning' icon='undo' onClick={() => props.handlePending(todo)} hide={!todo.done} />
                    <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} hide={!todo.done} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <td>Description</td>
                    <td className="tableActions">Actions</td>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}