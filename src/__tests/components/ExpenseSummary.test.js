import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";

test("should render ExpenseSummary correctly with 1 expense", () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={1} expensesTotal={250} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary correctly with multiple expenses", () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={23} expensesTotal={2500} />
  );
  expect(wrapper).toMatchSnapshot();
});
