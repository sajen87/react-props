import React from 'react';

class UserOutput extends React.Component {
    render() {
        return (
            <div>
                <p>Grażyna</p>
                <p>Janusz</p>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default UserOutput;