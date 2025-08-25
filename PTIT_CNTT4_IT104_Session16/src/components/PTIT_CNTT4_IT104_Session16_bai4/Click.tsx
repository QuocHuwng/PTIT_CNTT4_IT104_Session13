import React, { Component } from 'react';

type State = {
    count: number;
};

export default class Click extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    Click = () => {
        this.setState((click) => ({
            count: click.count + 1,
        }));
    };

    render() {
        return (
            <div>
                <h2>Số lần click: {this.state.count}</h2>
                <button onClick={this.Click}>Click</button>
            </div>
        );
    }
}