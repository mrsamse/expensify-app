import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../_fixtures/expenses";

test("should render ExpenseForm", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
});

test("should set description on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value: "test" }
    });
  expect(wrapper.state("description")).toBe("test");
});

test("should set note on textarea change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("textarea")
    .at(0)
    .simulate("change", {
      target: { value: "test" }
    });
  expect(wrapper.state("note")).toBe("test");
});

test("should set amount on valid input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value: "100" }
    });
  expect(wrapper.state("amount")).toBe("100");
});

test("should not set amount on not valid input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value: "abc" }
    });
  expect(wrapper.state("amount")).toBe("");
});
