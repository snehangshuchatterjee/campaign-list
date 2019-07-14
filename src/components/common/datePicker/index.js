import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';

import "react-datepicker/dist/react-datepicker.css";
import './datepicker.css'

class DatePickerComponent extends Component {
    state = {
        selectedDate: ""
    }

    handleChangeStart = (date) => {
        const { handleStartDateChange } = this.props;

        this.setState({
            startDate: date
        });

        handleStartDateChange(date);
    }

    handleChangeEnd = (date) => {
        const { handleEndDateChange } = this.props;

        this.setState({
            endDate: date
        });

        handleEndDateChange(date);
    }

    render = () => {
        return (
            <>
                <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                    placeholderText="Start Date"
                    className="datepickerClass"
                />

                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    minDate={this.state.startDate}
                    placeholderText="End Date"
                    className="datepickerClass"
                />
            </>
        );
    }
}

export default DatePickerComponent;

DatePickerComponent.propTypes = {
    handleStartDateChange: PropTypes.func.isRequired,
    handleEndDateChange: PropTypes.func.isRequired
}