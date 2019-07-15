import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterBodyComponent from './filterBody';

import { filterData } from '../../actions/manageData'

const mapStateToProps = (state) => {
    return ({
        data: state.manageData.data,
        filteredData: state.manageData.filteredData,
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        saveFilteredData: (filteredData) => {
            dispatch(filterData(filteredData));
        }
    });
}

export class FilterComponent extends Component {
    state = {
        startDate: "",
        endDate: "",
        filteredName: ""
    }

    handleStartDateChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleEndDateChange = (date) => {
        this.setState({
            endDate: date
        });
    }

    handleNameChange = (filteredName) => {
        this.setState({
            filteredName: filteredName
        });
    }

    handleButtonClick = () => {
        const { startDate, endDate, filteredName } = this.state;
        const { data, saveFilteredData } = this.props;
        let filteredData;

        if (startDate) {
            filteredData = data.filter((item => {
                return (new Date(item.startDate) > new Date(startDate));
            }));
        }
        filteredData = filteredData ? filteredData : data;
        if (endDate) {
            filteredData = filteredData.filter((item => {
                return new Date(item.endDate) < new Date(endDate);
            }));
        }
        if (filteredName) {
            filteredData = filteredData.filter((item => {
                return item.name.indexOf(filteredName) !== -1;
            }));
        }

        saveFilteredData(filteredData);
    }

    render = () => {
        return (
            <>
                <FilterBodyComponent handleFilter={this.handleFilter}
                    clearSearch={this.clearSearch}
                    handleDateChange={this.handleDateChange}
                    handleStartDateChange={this.handleStartDateChange}
                    handleEndDateChange={this.handleEndDateChange}
                    handleNameChange={this.handleNameChange}
                    handleButtonClick={this.handleButtonClick}
                />
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);