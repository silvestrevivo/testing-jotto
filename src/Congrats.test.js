import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create a ShalloWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific for this setup
 * @returns {ShalloWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />)
}

test('renders without errors', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
})

test('renders no text when `success` props is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
})

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: 'true' });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
})


