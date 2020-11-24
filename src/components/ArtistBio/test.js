import ArtistBio from '.';

describe('ArtistBio', () => {
    let component;

    beforeEach(()=>{
        component = shallow(<ArtistBio />);
        });
    
    test('ArtistBio exists', () => {
        expect(component).toExist;
    })
})