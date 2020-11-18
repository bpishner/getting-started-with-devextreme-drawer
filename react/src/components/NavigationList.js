import React from "react";
import List from "devextreme-react/list";
import { Link } from "react-router-dom";

const navigation = [
    { id: 1, text: "Inbox", icon: "message", path: "inbox" },
    { id: 2, text: "Sent Mail", icon: "check", path: "sent-mail" },
    { id: 3, text: "Trash", icon: "trash", path: "trash" },
    { id: 4, text: "Spam", icon: "mention", path: "spam" }
];

class NavigationList extends React.Component {
    closeDrawer = () => {
        this.props.stateHandler({ isDrawerOpen: false });
    }

    renderItem = (data) => {
        return (
            <div>
                <Link to={'/' + data.path}>
                    <div>
                        <div className="dx-list-item-icon-container">
                            <i className={`dx-icon dx-list-item-icon dx-icon-${data.icon}`}></i>
                        </div>
                        <span>{data.text}</span>
                    </div>
                </Link>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <List
                    items={navigation}
                    width={200} 
                    selectionMode="single"
                    onSelectionChanged={this.closeDrawer}
                    itemRender={this.renderItem}
                />
            </React.Fragment>
        );
    }
}
export default NavigationList;