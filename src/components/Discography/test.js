import Discography from '.';

describe('Discography', () => {
    let component;

    beforeEach(()=>{
        component = shallow(<Discography />);
        });
    
    test('Discography exists', () => {
        expect(component).toExist;
    })
})