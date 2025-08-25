import React, { Component } from 'react';

type State = {
    isLoggedIn: boolean;
};
class LoginStatus extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    toggle = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    };

    render() {
        const { isLoggedIn } = this.state;

        return (
            <div>
                <h2>
                    {isLoggedIn ? 'Xin chào, User!' : 'Vui lòng đăng nhập để tiếp tục.'}
                </h2>
                <button onClick={this.toggle}>
                    {isLoggedIn ? 'Đăng xuất' : 'Đăng nhập'}
                </button>
            </div>
        );
    }
}

export default LoginStatus;
