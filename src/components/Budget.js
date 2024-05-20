import React, {Component} from "react";
import {AppContext, AppProvider} from "../context/AppContext";

// class Budget extends Component {
// }

export default class Budget extends Component {
    static context = AppContext;

    render() {
        return (
            <div className="col-6">
                <h4>Budget</h4>
                <hr/>
                {this.context}
                {/*{context.AppProvider.budget}*/}
                {/*{AppProvider.value.budget}*/}
                {/*{this.props.value}*/}
                {/*{this.context.state}*/}
                {/*{context.displayName}*/}
                {/*{context.Provider.state.budget}*/}
                {/*{context.state}*/}
                {/*{AppProvider().state.budget}*/}
            </div>)
    }
}