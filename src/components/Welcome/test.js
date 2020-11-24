import Welcome from '.';

describe('Welcome', () => {
    let component;

    beforeEach(()=>{
        component = shallow(<Welcome />);
        });
    
    test('Welcome exists', () => {
        expect(component).toExist;
    })
})