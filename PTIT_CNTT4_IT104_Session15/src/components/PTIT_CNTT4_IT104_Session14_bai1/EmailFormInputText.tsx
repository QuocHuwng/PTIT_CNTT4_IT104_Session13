import React, { Component, type ChangeEvent, type FormEvent } from 'react';

interface State {
  email: string;
}

class EmailFormInputText extends Component<{}, State> {
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
    const { email } = this.state;
    localStorage.setItem('submittedEmail', JSON.stringify({ email }));
    this.setState({ email: '' }); // reset input nếu muốn
  };

  render() {
    const { email } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EmailFormInputText;
