import React from "react"
import Grid from "../template/grid.jsx"
import IconButton from "../template/iconButton.jsx"

export default props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input type="text" id="description" className="form-control" placeholder="Add a task"/>

        </Grid>
        <Grid cols="12 3 2">
            <IconButton style="primary" icon="plus" />
        </Grid>
    </div>
)