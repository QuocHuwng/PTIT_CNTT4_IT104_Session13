import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

type Product = {
    id: number;
    name: string;
    price: string;
    quantity: number;
};

type State = {
    product: Product;
};

export default class ParentComponent extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            product: {
                id: 1,
                name: 'Bưởi ba roi',
                price: '12.000 đ',
                quantity: 6
            }
        };
    }

    render() {
        return (
            <div>
                <ChildComponent product={this.state.product} />
            </div>
        );
    }
}
