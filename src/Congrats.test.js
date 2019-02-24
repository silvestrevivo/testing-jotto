import React from 'react'
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import Congrats from './Congrats'

const defaultProps = { success: false };

/**
 * Factory function to create a ShalloWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific for this setup
 * @returns {ShalloWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />)
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
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
})

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
})

