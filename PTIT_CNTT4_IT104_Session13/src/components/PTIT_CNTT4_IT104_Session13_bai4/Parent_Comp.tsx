import React, { Component } from 'react';
import Children_Comp from './Children_Comp';

class Parent_Comp extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'Nguyễn Văn Nam'
        };
    }

    render() {
        return (
            <div>
                <h3>Họ và tên bên component cha: {this.state.name}</h3>
                <Children_Comp name={this.state.name} />
            </div>
        );
    }
}

export default Parent_Comp;
