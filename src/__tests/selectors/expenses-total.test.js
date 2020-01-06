import expenses from "../_fixtures/expenses";
import selectExpensesTotal from "../../selectors/expenses-total";

test("should return 0 if no expenses", () => {
  expect(selectExpensesTotal([])).toBe(0);
});

test("should correctly add up a single expense", () => {
  expect(selectExpensesTotal([expenses[0]])).toBe(expenses[0].amount);
});

test("should correctly add up multiple expenses", () => {
  const total = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  expect(selectExpensesTotal(expenses)).toBe(total);
});
