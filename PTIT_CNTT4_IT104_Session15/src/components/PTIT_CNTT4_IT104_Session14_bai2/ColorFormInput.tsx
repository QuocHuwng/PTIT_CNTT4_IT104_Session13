import React, { Component, type ChangeEvent, type FormEvent } from 'react';

interface State {
    color: string;
    submittedColor: string;
}

class ColorFormInput extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            color: '#000000',
            submittedColor: ''
        };
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ color: e.target.value });
    };

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({ submittedColor: this.state.color });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Màu sắc:</label>
                    <input
                        type="color"
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>

                <div>
                    <p>Mã màu đã chọn: {this.state.submittedColor}</p>
                </div>
            </div>
        );
    }
}

export default ColorFormInput;