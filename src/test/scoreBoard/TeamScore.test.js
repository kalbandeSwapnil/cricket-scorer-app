import React from 'react';
import {TeamScore} from '../../main/scoreBoard/TeamScore'
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { configure } from 'enzyme';

import {teamScore} from '../../main/scoreBoard/TeamScoreReducer';
configure({ adapter: new Adapter() })


let state = {
    team1: {
        teamName: 'Team 1',
        runs: 100,
        wickets: 6,
        currentBall: 2,
        currentOver: 9,
        totalOver: 10

    },
    team2: {
        teamName: 'Team 2',
        runs: 150,
        wickets: 8,
        currentBall: 0,
        currentOver: 0,
        totalOver: 20
    }
}
it('should render team score', () => {
    const wrapper = mount(<TeamScore team1={state.team1} team2={state.team2} />)

    expect(wrapper.find('.teamName').get(0).props.children.props.children).toEqual('Team 1');
    expect(wrapper.find('.teamScore').get(0).props.children[0]).toEqual(100);
    expect(wrapper.find('.teamScore').get(0).props.children[2]).toEqual(6);


    let s = wrapper.find('.teamScore').at(0).text();
    expect(s).toEqual("100/6");

    let string = wrapper.find('.currentBallAndOver').at(0).text();
    expect(string).toEqual("8.2/10");


});


// it('should render team score when team already played', () => {
//     const set2 ={
//         teamName:" Team 2",
//         score:150,
//         wickets:6,
//         currentOver:0,
//         currentBall:0,
//         totalOver:20
//     }
//     const wrapper = mount(<TeamScore team1={state.team1} team2={state.team2} /> )
//     //console.log("******",wrapper.find('.currentBallAndOver').get(0).props.children);
//
//     expect(wrapper.find('.teamName').get(0).props.children.props.children).toEqual('Team ');
//     expect(wrapper.find('.teamScore').get(0).props.children[0]).toEqual(150);
//     expect(wrapper.find('.teamScore').get(0).props.children[2]).toEqual(6);
//     console.log("******",wrapper.find('.currentBallAndOver').get(0).props.children[0]);
//     expect(wrapper.find('.currentBallAndOver').get(0).props.children[0]).toEqual(0/20);
//
//     let s = wrapper.find('.teamScore').at(0).text();
//     expect(s).toEqual("150/6");
//
//     let string = wrapper.find('.currentBallAndOver').at(0).text();
//     expect(string).toEqual("0/20");
//
//     let stringTeamScore = wrapper.find('.teamScoreFull').at(0).text();
//     expect(stringTeamScore).toEqual(" Team 2150/6   in  0/20");
//
//
// });
