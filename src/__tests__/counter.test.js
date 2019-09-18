import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
 

describe('< Counter />', () => {
    it( 'Is rendered when app starts', () => {
        let app = shallow(<Counter />);

        expect(app.find('.down').exists()).toEqual(true);
        expect(app.find('.up').exists()).toEqual(true);

        expect(app.find('.count').text()).toEqual("0");
    });

    it('count should be toggled when down clicker is pressed', () => {
        let app = mount(< Counter />);
        let downA = app.find('.down');

        downA.simulate('click');
        expect(app.state().polarity).toEqual("negative");
        expect(app.find('.count').text()).toEqual("-1");
        
    });
    
    it('count should be toggled when up clicker is pressed', () => {
        let app = mount(< Counter />);
        let downA = app.find('.up');

        downA.simulate('click');
        expect(app.state().polarity).toEqual("positive");
        expect(app.find('.count').text()).toEqual("1");

    });
    
    it('matches snapshot', () => {
        const snapshot = renderer.create(< Counter />).toJSON();
        expect(snapshot).toMatchSnapshot();
    })

});