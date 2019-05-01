import { correctGuess, actionTypes } from "./index";

describe("correctGuess", () => {
  test('should return an action with type "CORRECT_GUESS"', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
