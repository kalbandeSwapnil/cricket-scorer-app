import React from 'react';
import TeamScore from '../../main/scoreBoard/TeamScore'
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() })

it('should render team score', () => {
    const wrapper  = mount(<TeamScore teamName=" Team 1" score={100} wickets={6} currentOver={10} currentBall={2} totalOver={20}/>);
    // console.log("******",wrapper.find('.currentBallAndOver').get(0).props.children);
    expect(wrapper.find('.teamName').length).toEqual(1);
    expect(wrapper.find('.teamName').get(0).props.children.props.children).toEqual(' Team 1');
    expect(wrapper.find('.teamScore').get(0).props.children[0]).toEqual(100);
    expect(wrapper.find('.teamScore').get(0).props.children[2]).toEqual(6);
    expect(wrapper.find('.currentBallAndOver').get(0).props.children[0]).toEqual('9.');
});