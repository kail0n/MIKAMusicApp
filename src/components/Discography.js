import React, { Component } from 'react';

class Discography extends Component{
        albums = {
            record: [
            {
                title: 'MY NAME IS MICHAEL HOLBROOK',
                image: 'https://cdn1.umg3.net/78/files/2019/10/mika-my-name-is-michael-holbrook-min.png',
                linkToAlbum: 'https://www.mikasounds.com/releases/my-name-is-michael-holbrook/'
            },
            {
                title: 'NO PLACE IN HEAVEN',
                image: 'https://cdn1.umg3.net/78/files/2015/05/Screen-shot-2015-07-16-at-11.05.20.png',
                linkToAlbum: 'https://www.mikasounds.com/releases/no-place-in-heaven/'
    
            },
            {
                title: 'SONGBOOK VOL. 1',
                image: 'https://cdn1.umg3.net/78/files/2014/03/Mika-Song-Book-Vol.-1.jpg',
                linkToAlbum: 'https://www.mikasounds.com/releases/songbook-vol-1/'
            },
        ],
    };


    render(){
        return(
            <div className='albumContainer'>
                {this.albums.record.map((record) => {
                    return (
                        <div className='recordContainer'>
                            <h1>{record.title}</h1>
                            <img className='resize' src={record.image} />
                            <a href={record.linkToAlbum}>Go to {record.title}</a>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Discography;







