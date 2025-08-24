import React from 'react';

class Clock extends React.Component {
    state = {
        time: new Date(),
    };

    timerID: NodeJS.Timer | undefined;

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timerID) {
            clearInterval(this.timerID);
        }
    }

    render() {
        const { time } = this.state;
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');

        return (
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                Thời gian hiện tại: {hours} : {minutes} : {seconds}
            </div>
        );
    }
}

export default Clock;
