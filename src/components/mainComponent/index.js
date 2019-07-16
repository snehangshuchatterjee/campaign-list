import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterComponent from '../filter';
import TableComponent from '../common/table';

import './mainComponent.css'

const mapStateToProps = (state) => {
    return ({
        filteredData: state.manageData.filteredData
    });
}

class MainComponent extends Component {
    render = () => {
        return (
            <div className="container mainContainer">
                <h2><strong>List of Campaigns</strong></h2>
                <FilterComponent />
                <TableComponent data={this.props.filteredData} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(MainComponent);