import React, { Component, type ChangeEvent, type FormEvent } from 'react';

interface State {
    progress: number;
    submittedProgress: number | null;
}

class RangeFormInput extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            progress: 0,
            submittedProgress: null
        };
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ progress: parseInt(e.target.value, 10) });
    };

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({ submittedProgress: this.state.progress });
    };

    render() {
        const { progress, submittedProgress } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Tiến độ hoàn thành: {submittedProgress !== null ? `${submittedProgress} %` : '%'}</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default RangeFormInput;
