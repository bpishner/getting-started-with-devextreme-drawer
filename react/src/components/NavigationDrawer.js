import React from "react";
import "./NavigationDrawer.css";

import { Drawer } from "devextreme-react/drawer";
import { Toolbar, Item } from "devextreme-react/toolbar";
import NavigationList from "./NavigationList";

import { Switch, Route } from "react-router-dom";

import Inbox from "../views/Inbox";
import Trash from "../views/Trash";
import SentMail from "../views/SentMail";
import Spam from "../views/Spam";

class NavigationDrawer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false
        };
        this.buttonOptions = {
            icon: "menu",
            onClick: () => {
                this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
            }
        };
    }
    
    renderList = () => {
        const stateHandler = (newState) => this.setState(newState);
        return (
            <NavigationList stateHandler={stateHandler} />
        );
    }
    
    render() {
        return (
            <React.Fragment>
                <Toolbar id="toolbar">
                    <Item 
                        widget="dxButton" 
                        options={this.buttonOptions} 
                        location="before"
                    />
                </Toolbar>
                <Drawer
                    minSize={37}
                    height={250}
                    revealMode="expand"
                    openedStateMode="overlap"
                    render={this.renderList}
                    opened={this.state.isDrawerOpen}>
                    <div id="view">
                        <Switch>
                            <Route exact path="/" component={Inbox} />
                            <Route exact path="/inbox" component={Inbox} />
                            <Route exact path="/sent-mail" component={SentMail} />
                            <Route exact path="/spam" component={Spam} />
                            <Route exact path="/trash" component={Trash} />
                        </Switch>
                    </div>
                </Drawer>
            </React.Fragment>
        );
    }
}
export default NavigationDrawer;