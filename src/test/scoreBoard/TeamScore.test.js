
import React from 'react';
import ReactDOM from 'react-dom';
import TeamScore from '../../main/scoreBoard/TeamScore'
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    let wrapper  = shallow(<TeamScore/>);
    expect(true).toEqual(true)
});
