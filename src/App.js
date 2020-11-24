import React, { Component } from 'react';
import { ArtistBio, Discography, LikeButton }  from './components';
import './style.css';

class App extends Component {
    render() {
        return (
            <main>
                <ArtistBio />
                <Discography />
                <LikeButton />
            </main>
        )
    }
}

export default App;