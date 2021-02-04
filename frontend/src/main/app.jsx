import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from "react"
import Menu from "../template/menu.jsx"
import Routes from './routes.jsx'

const App = props => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
)

export default App