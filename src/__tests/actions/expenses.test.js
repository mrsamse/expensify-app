import {
  addExpense,
  removeExpense,
  editExpense
} from "./../../actions/expenses";
import expenses from "../_fixtures/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", {
    description: "description",
    note: "note",
    amount: 100,
    createdAt: 100
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      description: "description",
      note: "note",
      amount: 100,
      createdAt: 100
    }
  });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[0]
  });
});
