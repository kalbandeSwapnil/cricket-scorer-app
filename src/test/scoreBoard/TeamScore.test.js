import React from 'react';
import TeamScore from '../../main/scoreBoard/TeamScore'
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() })

it('should render team score', () => {
    const set1 = {
        teamName:"Team1",
        score:100,
        wickets:6,
        currentOver:10,
        currentBall:2,
        totalOver:20
    }
    const wrapper = mount(<TeamScore {...set1}/> )

    //console.log("******",wrapper.find('.currentBallAndOver').get(0).props.children);
    expect(wrapper.find('.teamName').get(0).props.children.props.children).toEqual('Team1');
    expect(wrapper.find('.teamScore').get(0).props.children[0]).toEqual(100);
    expect(wrapper.find('.teamScore').get(0).props.children[2]).toEqual(6);
    expect(wrapper.find('.currentBallAndOver').get(0).props.children[0]).toEqual(9);

    let s = wrapper.find('.teamScore').at(0).text();
    expect(s).toEqual("100/6");

    let string = wrapper.find('.currentBallAndOver').at(0).text();
    expect(string).toEqual("9.2/20");

    let stringTeamScore = wrapper.find('.teamScoreFull').at(0).text();
    expect(stringTeamScore).toEqual("Team1100/6   in  9.2/20");


});


it('should render team score when team already played', () => {
    const set2 ={
        teamName:" Team 2",
        score:150,
        wickets:6,
        currentOver:0,
        currentBall:0,
        totalOver:20
    }
    const wrapper = mount(<TeamScore {...set2}/> )
    //console.log("******",wrapper.find('.currentBallAndOver').get(0).props.children);

    expect(wrapper.find('.teamName').get(0).props.children.props.children).toEqual(' Team 2');
    expect(wrapper.find('.teamScore').get(0).props.children[0]).toEqual(150);
    expect(wrapper.find('.teamScore').get(0).props.children[2]).toEqual(6);
    console.log("******",wrapper.find('.currentBallAndOver').get(0).props.children[0]);
    expect(wrapper.find('.currentBallAndOver').get(0).props.children[0]).toEqual(0/20);

    let s = wrapper.find('.teamScore').at(0).text();
    expect(s).toEqual("150/6");

    let string = wrapper.find('.currentBallAndOver').at(0).text();
    expect(string).toEqual("0/20");

    let stringTeamScore = wrapper.find('.teamScoreFull').at(0).text();
    expect(stringTeamScore).toEqual(" Team 2150/6   in  0/20");


});



it('should render team score set 3', () => {
    const set3 = {
        teamName:"India",
        score:350,
        wickets:4,
        currentOver:1,
        currentBall:2,
        totalOver:20
    }
    const wrapper = mount(<TeamScore {...set3}/> )
    //console.log("******",wrapper.find('.currentBallAndOver').get(0).props.children);
    expect(wrapper.find('.teamName').get(0).props.children.props.children).toEqual('India');
    expect(wrapper.find('.teamScore').get(0).props.children[0]).toEqual(350);
    expect(wrapper.find('.teamScore').get(0).props.children[2]).toEqual(4);
    expect(wrapper.find('.currentBallAndOver').get(0).props.children[0]).toEqual(0);

    let s = wrapper.find('.teamScore').at(0).text();
    expect(s).toEqual("350/4");

    let string = wrapper.find('.currentBallAndOver').at(0).text();
    expect(string).toEqual("0.2/20");

    let stringTeamScore = wrapper.find('.teamScoreFull').at(0).text();
    expect(stringTeamScore).toEqual("India350/4   in  0.2/20");


});