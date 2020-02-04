import expenses from "../_fixtures/expenses";
import expensesReducer from "../../reducers/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should add expense", () => {
  const expense = {
    id: "4",
    description: "test",
    note: "",
    amount: 100,
    createdAt: 0
  };
  const state = expensesReducer(expenses, {
    type: "ADD_EXPENSE",
    expense
  });
  expect(state).toEqual([...expenses, expense]);
});

test("should remove expense by id", () => {
  const state = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const state = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: -1
  });
  expect(state).toEqual(expenses);
});

test("should edit expense", () => {
  const updates = {
    description: "test"
  };
  const state = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates
  });
  expect(state[0].description).toBe(updates.description);
});

test("should not edit expense if id not found", () => {
  const state = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: -1
  });
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const state = expensesReducer([], {
    type: "SET_EXPENSES",
    expenses
  });
  expect(state).toBe(expenses);
});
