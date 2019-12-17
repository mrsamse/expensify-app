import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../_fixtures/expenses";

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test("should render AddExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should call onSubmit prop for valid form submission", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[0]);
});
