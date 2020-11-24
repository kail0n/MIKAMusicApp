import React, { Component } from 'react';

class ArtistBio extends Component {
    artist = {
        name: "MIKA",
        genre: "Pop",
        bio: "International musical sensation Mika opened his career in 2007 with defining single Grace Kelly, which sold over 3 million copies worldwide and was the second British single ever to top the chart on downloads alone. The debut album, Life In Cartoon Motion, went straight to #1 in UK and 11 other countries, going on to sell over 7 million copies worldwide, plus over 6 million single sales.",
        bio2:"His 2nd album The Boy Who Knew Too Much went top 10 in 11 countries and his 3rd, The Origin of Love released in 2012, saw collaborations with Pharrell Williams, Nick Littlemore and Ariana Grande, amongst others.\n Mika has been nominated for and won awards from the Brits, the Grammys, the Ivor Novellos, World Music Awards and MTV’s Europe, Asia, Australia and Japan, Capital Radio Awards, Q Magazine, BT, Vodafone and Virgin Media, amongst others.\nHe is also the recipient of the prestigious French award 'Chevalier dans l’ordre des Arts et des Lettres'.\n His contagious joy and colourful performances have delighted audiences from the beginning and have led to sold out tours worldwide. His videos have racked up an impressive total of over 250 million views! Mika has now sold over 10 million records and has Gold or Platinum awards in an impressive 32 countries worldwide. As well as being a songwriter and performer, Mika has designed clothes and accessories, is a writer (including magazine columns, blogs and work on a book), illustrator and artist. He is currently working on his 4th album."
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
                        <p>{this.artist.bio2}</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default ArtistBio;