import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterComponent from '../filter';
import TableComponent from '../common/table';

const mapStateToProps = (state) => {
    return ({
        filteredData: state.manageData.filteredData
    });
}

export class MainComponent extends Component {
    render = () => {
        return (
            <div className="App">
                <FilterComponent />
                <TableComponent data={this.props.filteredData} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(MainComponent);