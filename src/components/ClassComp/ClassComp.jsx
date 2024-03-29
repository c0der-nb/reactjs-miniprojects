import React from "react";

export default class ClassComp extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
                <div>
                    <h1>Counter App</h1>
                    <p>Count: {this.state.count}</p>
                    <button onClick={() => this.setState((prevVal) => {
                        return {count: prevVal.count+1}
                    })}>Increment</button>
                    <button onClick={() => this.setState((prevState) => {
                        return {count: prevState.count-1}
                    })}>Decrement</button>
                </div>
        )
    }
}