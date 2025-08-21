import React, { Component } from 'react'
type State = {
    id: number;
    name: string;
    date: string;
    map: string;
};
export default class Exercises02 extends Component {
    state: { id: number, name: string, date: string, map: string };
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            name: 'Nguyen Quoc Hung',
            date: '29/05/2006',
            map: 'Thanh Xuan, Ha Noi'
        }
    }
    render() {
        return (
            <div>
                <p>Id:{this.state.id}</p>
                <p>Ten: {this.state.name}</p>
                <p>Ngay sinh: {this.state.date}</p>
                <p>Dia chi: {this.state.map}</p>
            </div>
        )
    }
}