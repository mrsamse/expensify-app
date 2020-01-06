import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../_fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();

  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value: "test" }
    });
  expect(setTextFilter).toHaveBeenLastCalledWith("test");
});

test("should sort by date", () => {
  wrapper
    .find("select")
    .at(0)
    .simulate("change", {
      target: { value: "date" }
    });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  wrapper
    .find("select")
    .at(0)
    .simulate("change", {
      target: { value: "amount" }
    });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const startDate = moment();
  const endDate = moment().add(3, "days");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
    startDate,
    endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus changes", () => {
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(
    "startDate"
  );
  expect(wrapper.state("focusedInput")).toBe("startDate");
});
