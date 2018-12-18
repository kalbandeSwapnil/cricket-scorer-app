import React from 'react';
import { OverStatus }  from '../../main/overStatus/OverStatus'
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() })

const Balls = [{
    bowlerName : 'brett lee',
    runs :  4,
    isExtra : false,
    out : false,
    extras : {
        type : null,
        runs: 0
    }
},
{
    bowlerName : 'Mc Grath',
    runs :  0,
    isExtra : false,
    out : true,
    extras : {
        type : null,
        runs: 0
    }
}]

const ExtraBalls = [
    {
        bowlerName : "brett lee",
        runs :  0,
        isExtra : true,
        out : false,
        extras : {
            type : 'Wd',
            runs: 1
    }
},
{
    bowlerName : "brett lee",
    runs :  0,
    isExtra : true,
    out : false,
    extras : {
        type : 'Nb',
        runs: 1
}
},
{
    bowlerName : "Mcgrath",
    runs :  0,
    isExtra : true,
    out : false,
    extras : {
        type : 'B',
        runs: 1
}
},
{
    bowlerName : "Mcgrath",
    runs :  0,
    isExtra : true,
    out : false,
    extras : {
        type : 'Lb',
        runs: 1
}
}]

it('should render currentOverScore component with the normal props', () => {
    const wrapper = mount(<OverStatus Balls={Balls} />)
    // console.log("ABCD", wrapper.find('.bowler-name').get(0).props.children[1])
    expect(wrapper.find('.over-history').get(0).props.children).toEqual("4 W")
    expect(wrapper.find('.bowler-name').get(0).props.children[1]).toEqual("Mc Grath")
    expect(wrapper.find('.over-history').text()).toEqual("4 W")
})

it('should render currentOverScore component with extraBalls props', () => {
    const wrapper = mount(<OverStatus Balls={ExtraBalls} />)
    // console.log("ABCD", wrapper.find('.bowler-name').get(0).props.children[1])
    expect(wrapper.find('.over-history').get(0).props.children).toEqual("Wd Nb B Lb")
    expect(wrapper.find('.bowler-name').get(0).props.children[1]).toEqual("Mcgrath")
    expect(wrapper.find('.over-history').text()).toEqual("Wd Nb B Lb")
})

