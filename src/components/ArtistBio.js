import React, { Component } from 'react';

class ArtistBio extends Component {
    artist = {
        name: "MIKA",
        genre: "Pop",
        bio: "International musical sensation Mika opened his career in 2007 with defining single Grace Kelly, which sold over 3 million copies worldwide and was the second British single ever to top the chart on downloads alone. The debut album, Life In Cartoon Motion, went straight to #1 in UK and 11 other countries, going on to sell over 7 million copies worldwide, plus over 6 million single sales."
    }

    render() {
        return (
            <div>
                <div className="biography">
                    <h1>{this.artist.name} Sounds</h1>
                    <h3>{this.artist.genre} Musician</h3>
                </div>
                <div className='bioContainer'>
                    <h2>Biography:</h2>
                    <div className="bio">
                        <p>{this.artist.bio}</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default ArtistBio;