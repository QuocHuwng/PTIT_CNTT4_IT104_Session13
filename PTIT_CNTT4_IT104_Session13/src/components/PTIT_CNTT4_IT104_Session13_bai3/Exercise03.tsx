import React, { Component } from 'react'
type User = {
    id: number;
    name: string;
    address: number;
};
type State = {
    users: User[];
};
export default class Exercise03 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: 'John', address: 30 },
                { id: 2, name: 'Mary', address: 20 },
                { id: 3, name: 'Hihi', address: 10 },
            ]
        };
    }
    render() {
        return (
            <div>
                <table border={1} cellPadding={10}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}