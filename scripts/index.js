import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    render() {
        return <div > Hello {
            this.props.name
        } < /div>;
    }
}

const appRoot = document.getElementById('application-root');

ReactDOM.render(<HelloMessage name="Jane" />, appRoot);
