import React, { Component } from 'react';

class Welcome extends Component {
    state = {
        username: "",
        nameInput: "",
    };

    render() {
        return(
            <form>
                <label>Hello {this.state.username ? this.state.username : "folk " } , welcome to Mika's Fanclub page</label>
                <input type='text' name="nameInput" id='nameInput' placeholder='Enter your name!' />
                <input type='submit' value='Update!' />
            </form>
            )
    }
}

export default Welcome;