
import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
        // this.processLogin = this.processLogin.bind(this);
    }

    processLogin = () => {
        this.setState(prevState => ({ loggedIn: !prevState.loggedIn }));
    }

    // processLogin() {
    //     this.setState({
    //         loggedIn: !this.state.loggedIn
    //     });
    // }

    render() {
        let buttonText = this.state.loggedIn ? "Log Out" : "Log In";
        return (
            <div>
                <p>
                    {this.state.loggedIn ? "You are currently Logged In: " : "You are currently logged out"} <br />
                    <button onClick={this.processLogin}>{buttonText}</button>
                </p>
            </div>
        );
    }

}

export default Test;