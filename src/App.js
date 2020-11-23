import React, { Component } from 'react';
import ArtistBio from './components/ArtistBio';
import Discography from './components/Discography';

class App extends Component {
    render() {
        return (
            <main>
                <ArtistBio />
                <Discography />
            </main>
        )
    }
}

export default App;