import React from 'react';

class UpdateState extends React.Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            company: 'Rikkei Academy'
        };
    }

    handleChange = () => {
        this.setState({ company: 'Rikkei Soft' });
    };

    render() {
        return (
            <div>
                <h3>Tên công ty: {this.state.company}</h3>
                <button onClick={this.handleChange}>Change</button>
            </div>
        );
    }
}

export default UpdateState;