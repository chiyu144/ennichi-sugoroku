import { shallow, mount, render } from 'enzyme';

import React from 'react';
import Intro from './containers/intro';
import Rule from './components/rule';

test('子 Component 存在', () => {
    const wrapper = shallow(<Intro />);
    expect(wrapper.find(Rule).length).toBe(1);
});