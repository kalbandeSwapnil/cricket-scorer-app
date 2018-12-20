import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';

import App from '../../App/'
import { TeamScore } from '../../main/scoreBoard/TeamScore'
import CricketGame from '../../main/cricketGame/CricketGame'
import Stats from '../../main/stats/Stats' 

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { mainReducer } from '../../main/mainReducer'
const testStore = createStore(mainReducer);


configure({ adapter: new Adapter()})

test('/stats path should redirect to Stats Component', () => {
    const wrapper = mount(
        <Provider store={testStore}>
            <MemoryRouter initialEntries={[ '/stats' ]}>
            <App/>
          </MemoryRouter>
        </Provider>
    );
    expect(wrapper.find(CricketGame)).toHaveLength(0);
    expect(wrapper.find(Stats)).toHaveLength(1);
  });

  test('/ path should redirect to CricketGame Component', () => {
    const wrapper = mount(
        <Provider store={testStore}>
            <MemoryRouter initialEntries={[ '/' ]}>
                <App/>
            </MemoryRouter>
        </Provider>
    );
    expect(wrapper.find(CricketGame)).toHaveLength(1);
    expect(wrapper.find(Stats)).toHaveLength(0);
  });



  /*
  *Test cases to check link is there in the components or not
  */

  test('/ path should contains stats link', () => {
    const wrapper = mount(
        <Provider store={testStore}>
            <MemoryRouter initialEntries={[ '/' ]}>
                <App/>
            </MemoryRouter>
        </Provider>
    );

    expect(wrapper.exists('.button-stats')).toEqual(true)
    expect(wrapper.find('.button-stats').text()).toEqual('Score Card')
  });

  test('/stats path should contains home link', () => {
    const wrapper = mount(
        <Provider store={testStore}>
            <MemoryRouter initialEntries={[ '/stats']}>
                <App/>
            </MemoryRouter>
        </Provider>
    );

    expect(wrapper.exists('.button-stats')).toEqual(true)
    expect(wrapper.find('.button-stats').text()).toEqual('Home')
  });





/** 
 * Test cases to check the view part of the rendered component
 */

let state = {
    team1: {
        teamName: 'Team 1',
        runs: 100,
        wickets: 6,
        currentBall: 2,
        currentOver: 9,
        totalOver: 20

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


test('/ path should redirect to CricketGame Component', () => {
    const wrapper = mount(
        <Provider store={testStore}>
            <MemoryRouter initialEntries={[ '/' ]}>
                <App/>
            </MemoryRouter>
        </Provider>
    )

    const wrapperComponent = mount(<TeamScore team1={state.team1} team2={state.team2} />)
    expect(wrapperComponent.find('.team1-container').text()).toEqual("Team 1100/6 in 9.2/20")
    expect(wrapperComponent.find('.team2-container').text()).toEqual("Team 2150/8 in 0.0/20")
})

