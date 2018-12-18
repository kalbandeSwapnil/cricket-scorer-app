import React from 'react';

import TeamScore from '../../main/scoreBoard/TeamScore';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() })
import {shallow} from 'enzyme';

describe('App',  () => {
    it('should have an input for the email',  ()  => {
        console.log("*****",TeamScore);
         const wrapper = shallow(<TeamScore team="team1"/>);
         expect(wrapper.find('[id="mainView"]')).to.have.text('Hello');
       // expect(true).toEqual(true);
    });
});
