import React, { Component, type ChangeEvent, type FormEvent } from 'react';

interface State {
  email: string;
}

class EmailFormInputText extends Component<{}, State> {
  state: { email: string; };
  constructor(props: {}) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Email đã nhập: ${this.state.email}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EmailFormInputText;