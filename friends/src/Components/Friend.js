import React from 'react';

export default class Friend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='friend' >
                <p>{this.props.id}</p>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.email}</p>
            </div>

        )
    }
}