import React from 'react';

class Input extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (event: { target: { value: any; }; }) => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <div>
                <h3>Dữ liệu: {this.state.value}</h3>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Nhập dữ liệu..."
                />
            </div>
        );
    }
}

export default Input;