import React, { Component } from "react";
type User = {
  name: string;
  email: string;
  age: string;
};
type State = {
  user: User;
  error: string;
  check: boolean
};
export default class Baitap5 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        age: "",
      },
      error: "",
      check: false
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };
  handleSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = this.state.user;
    if (!email.includes("@")) {
      this.setState({ error: "Email khong hop le", check: false });
    } else {
      // thỏa mãn đk
      this.setState({ check: true })
    }

  };

  render() {
    return (
      <div>
        <h1>Nhập thông tin người dùng</h1>
        <form onSubmit={this.handleSubmitted}>
          <input
            type="text"
            placeholder="Họ tên"
            name="name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Tuổi"
            name="age"
            onChange={this.handleChange}
          />
          <button type="submit">Gửi</button>
          <button type="submit">Xóa tất cả</button>
          {/* hiển thị  */}
          {this.state.check ? "hiển thị thông tin user" : ""}
        </form>
      </div>
    );
  }
}