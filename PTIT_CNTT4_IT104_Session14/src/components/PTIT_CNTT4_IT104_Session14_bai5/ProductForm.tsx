import React, { Component } from 'react'
type ProductState = {
    productCode: string;
    productName: string;
    price: number;
    quantity: number;
}
export default class ProductForm extends Component<{}, ProductState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            productCode: '',
            productName: '',
            price: 0,
            quantity: 0
        };
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        this.setState({
            [name]: name === 'price' || name === 'quantity' ? Number(value) : value
        } as unknown as ProductState);
    };
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Product:`, this.state);
    };
    render() {
    return (
      <div>
            <form onSubmit={this.handleSubmit}>
                <h2>Them moi san pham</h2>
                <label htmlFor="">Ma san pham</label>
                <input
                    type="text"
                    name="productCode"
                    value={this.state.productCode}
                    onChange={this.handleChange}
                />
                
                <label htmlFor="">Ten san pham</label>
                <input
                    type="text"
                    name="productName"
                    value={this.state.productName}
                    onChange={this.handleChange}
                />

                <label htmlFor="">Gia</label>
                <input
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                />

                <label htmlFor="">So luong</label>
                <select
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                >
                    <option value={0}>So luong</option>
                    <option value={1}>1</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                </select>
                <button type="submit">Dang ky</button>
            </form>
      </div>
    )
  }
}