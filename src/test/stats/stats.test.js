import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';

import App from '../../App/'
import CricketGame from '../../main/cricketGame/CricketGame'
import Stats from '../../main/stats/Stats' 
import { createCipher } from 'crypto';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { mainReducer } from '../../main/mainReducer'
const testStore = createStore(mainReducer);


configure({ adapter: new Adapter()})

test('/stats path should redirect to Stats Component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/stats' ]}>
        <App/>
      </MemoryRouter>
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
