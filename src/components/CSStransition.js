import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import "../css/App.css";

class Fade extends Component {
    state = {
        show: true
    };

    _showDiv = () => {
        this.setState({ show: this.state.show ? false : true });
    };

    render() {
        return (
            <div>
                <CSSTransition
                    in={this.state.show}
                    timeout={2000}
                    classNames="square"
                >
                    <div className={`square ${this.state.show}`}>Hello</div>
                </CSSTransition>
                <div onClick={this._showDiv} className="showDiv">
                    <div>Toggle Div</div>
                </div>
            </div>
        );
    }
}

export default Fade;
