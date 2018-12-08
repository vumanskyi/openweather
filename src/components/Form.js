import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                {this.props.weather}
            </div>
        );
    }
}

export default Form;