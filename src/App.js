import React, { Component } from 'react';
import ArtistBio from './components/ArtistBio';
// import Discography from './components/Discography';

class App extends Component {
    render() {
        return (
            <main>
                <h1>test</h1>
                <ArtistBio />
                {/* <Discography /> */}
            </main>
        )
    }
}

export default App;