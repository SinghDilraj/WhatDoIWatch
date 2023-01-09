import React from 'react';

class Header extends React.Component {
    render(){
        return <div className="header">
            <h2 onClick={() => window.location.href = '/'} > {this.props.value} </h2>
        </div>
    }
}

export default Header