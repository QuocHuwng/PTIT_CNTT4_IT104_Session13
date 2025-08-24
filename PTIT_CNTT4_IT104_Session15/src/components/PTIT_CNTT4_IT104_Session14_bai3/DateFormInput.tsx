import React, { Component, type ChangeEvent, type FormEvent } from 'react';

interface State {
    date: string;
    submittedDate: string;
}

class DateFormInput extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            date: '',
            submittedDate: ''
        };
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ date: e.target.value });
    };

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({ submittedDate: this.state.date });
    };

    formatDate = (dateStr: string): string => {
        if (!dateStr) return '';
        const [year, month, day] = dateStr.split('-');
        return `${day}/${month}/${year}`;
    };

    render() {
        const { date, submittedDate } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Ngày sinh:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>

                {submittedDate && (
                    <div>
                        <p>Ngày sinh: {submittedDate}</p>
                        <p>{this.formatDate(submittedDate)}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default DateFormInput;