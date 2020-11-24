import { shallow } from 'enzyme';
import App from '../App.js';

describe('App', () => {
    let component;

    beforeEach(()=>{
        component = shallow(<App />);
        });
    
    test('App exists', () => {
        expect(component).toExist;
    })
})