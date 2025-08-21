import React, { Component } from 'react';
type State = {
    name: string;
}
class Exercises01 extends Component<object, State> {
    state: { name: string; };
    constructor(props: object) {
        super(props);
        this.state = {
            name: 'Nguyễn Quốc Hưng'
        };
    }
    render() {
        return (
            <div>
                <p>Họ và tên: {this.state.name}</p>
            </div>
        );
    }
}
export default Exercises01