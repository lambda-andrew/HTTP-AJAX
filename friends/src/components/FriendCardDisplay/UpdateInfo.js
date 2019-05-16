import React from 'react';

export default class UpdateInfo extends React.Component {
    state = {

    }



    render() {
        return(
            <div className='friend'>
                <div className='friendHeader'>
                    <h2>Update Friend</h2>
                    <button onClick={this.props.update}>x</button>
                </div>
                <form>
                    <input value={this.props.data.name}/>
                    <input value={this.props.data.age}/>
                    <input value={this.props.data.email}/>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}

