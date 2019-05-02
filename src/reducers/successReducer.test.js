import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test('should return default initial state of "false" when no action is passed', () => {
  const newState = successReducer(undefined, {}); // this is the initial state definition
  expect(newState).toBe(false);
});

test('should return state of true upon receiving an action of type "CORRECT_GUESS"', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true); //*initial state as undefined (weird)
});
