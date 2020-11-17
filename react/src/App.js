import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import NavigationDrawer from "./components/NavigationDrawer";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route component={NavigationDrawer} />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;