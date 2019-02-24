import checkPropTypes from 'check-prop-types';

/**
 * Returns node(s) with the given data-test attribute
 * @param {ShalloWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShalloWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'props',
    component.name);
  expect(propError).toBeUndefined();
}
