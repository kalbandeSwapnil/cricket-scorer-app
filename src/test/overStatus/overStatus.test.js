import React from 'react';
import OverStatus from '../../main/overStatus/OverStatus'
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() })

it('should render currentOverScore component with the right props', () => {
    const Balls = [{
        bowlerName : 'brett lee',
        runs :  4,
        isExtra : false,
        out : false,
        extras : {
            type : null,
            runs: 0
        }
    }]
    const wrapper = mount(<OverStatus Balls={Balls} />)
    // console.log("ABCD", wrapper.find('.bowler-name').get(0).props.children[1])
    expect(wrapper.find('.over-history').get(0).props.children).toEqual(String(Balls[0].runs))
    expect(wrapper.find('.bowler-name').get(0).props.children[1]).toEqual(Balls[0].bowlerName)
})