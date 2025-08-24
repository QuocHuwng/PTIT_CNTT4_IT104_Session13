import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
    };

    intervalId: NodeJS.Timer | undefined;

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({
                count: prevState.count >= 9 ? 0 : prevState.count + 1,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    render() {
        return (
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                Số đếm: {this.state.count}
            </div>
        );
    }
}

export default Counter;
