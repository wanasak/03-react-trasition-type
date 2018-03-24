import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "../css/App.css";

class TransitionComp extends Component {
    state = {
        show: true
    };

    _showDiv = () => {
        this.setState({ show: this.state.show ? false : true });
    };

    render() {
        return (
            <div>
                <Transition unmountOnExit in={this.state.show} timeout={2000}>
                    {state => (
                        <div
                            style={{
                                background: "red",
                                height: "100px",
                                transition: "all 2s ease",
                                opacity:
                                    state === "exited" || state === "exiting"
                                        ? 0
                                        : 1
                            }}
                        >
                            {state}
                        </div>
                    )}
                </Transition>
                <Transition in={this.state.show} timeout={{
                    enter: 2000,
                    exit: 500
                }}>
                    {state => (
                        <div className={`square square-${state}`}>
                            {`square square-${state}`}
                        </div>
                    )}
                </Transition>
                <div onClick={this._showDiv} className="showDiv">
                    Toggle Div
                </div>
            </div>
        );
    }
}

export default TransitionComp;
