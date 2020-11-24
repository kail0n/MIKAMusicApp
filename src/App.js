import React, { Component } from 'react';
import { ArtistBio, Discography, Welcome }  from './components';
import './style.css';

class App extends Component {
    render() {
        return (
            <main>
                <ArtistBio />
                <Discography />
                <Welcome />
            </main>
        )
    }
}

export default App;