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

export class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      error: ""
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onTextChange = text => {
    this.props.setTextFilter(text);
  };

  onSortByChange = sortBy => {
    sortBy === "date" ? this.props.sortByDate() : this.props.sortByAmount();
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
          this.onTextChange(e.target.value);
        }}
      />
      <select
        value={this.props.filters.sortBy}
        onChange={e => {
          this.onSortByChange(e.target.value);
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>

      <DateRangePicker
        startDate={this.props.filters.startDate}
        startDateId="startDate"
        endDate={this.props.filters.endDate}
        endDateId="endDate"
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

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
