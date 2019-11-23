import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      error: ""
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    console.log("asd");
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = focusedInput => {
    this.setState(() => ({ focusedInput }));
  };

  render = () => (
    <div>
      <input
        type="text"
        value={this.props.filters.text}
        onChange={e => {
          this.props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        value={this.props.filters.sortBy}
        onChange={e => {
          e.target.value === "date"
            ? this.props.dispatch(sortByDate())
            : this.props.dispatch(sortByAmount());
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>

      <DateRangePicker
        startDate={this.props.filters.startDate}
        startDateId="startdate"
        endDate={this.props.filters.endDate}
        endDateId="enddate"
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.focusedInput}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
