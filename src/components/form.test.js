import Form from './form.js'
import {shallow, mount} from 'enzyme'
import React from  'react'

describe('Form', function() {
    it('renders without crashing', ()=>{
        shallow(<Form />);
    });

    it('should have fields to enter info', ()=>{
        const wrapper=shallow(<Form />);
        expect(wrapper.find("#video1")).toBeTruthy()
    });

    it('should callback if all fields are filled',()=>{
        const callback = jest.fn();
        const wrapper = mount(<Form onSubmit={callback} />);
        const value = 'foobar';
        wrapper.instance().setEditing(true);
    wrapper.update();
    wrapper.find('input[type="text"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value)
    })
})