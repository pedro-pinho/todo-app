import React from "react"
import IconButton from "../template/iconButton.jsx"

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>
                    {todo.description}
                </td>
                <td>
                    <IconButton style='success' icon='check' onClick={() => props.handleDone(todo)} />
                    <IconButton style='warning' icon='undo' onClick={() => props.handlePending(todo)} />
                    <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <td>Description</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}