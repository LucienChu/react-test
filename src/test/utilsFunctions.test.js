// const { sum } = require("../utils/utilsFunctions");
import { sum, getDate } from "../utils/utilsFunctions";
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("test get date", () => {
  expect(getDate()).toEqual("2020-06-30");
});
