import React, { Component } from "react";

import UserTemplate from "./UserTemplate";

export default class User extends Component {
    state = {
        name: "wanasak",
        lastName: "surain",
        age: 12,
        hobbies: ["run", "jump"],
        spanish: true,
        message() {
            console.log("Hey");
        },
        car: { brand: "ford", model: "Focus" },
        mother: "Martina"
    };

    _changeColor = () => {
        this.refs["myHeader"].style.color = "red";
    };

    render() {
        const style = { color: "blue" };
        return (
            <div>
                <h3 style={style} ref="myHeader">{this.state.mother}</h3>
                <div onClick={this._changeColor}>Change Header Color</div>
                <UserTemplate {...this.state} />
            </div>
        );
    }
}
