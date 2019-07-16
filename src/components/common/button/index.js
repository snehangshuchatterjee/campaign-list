import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

import './button.css';

const ButtonComponent = (props) => {
    const { handleButtonClick } = props;
    return (
        <Button variant="outline-secondary"
            onClick={() => {
                handleButtonClick();
            }}
            className="searchButton"
        >
            <i className="fa fa-search searchIcon" aria-hidden="true"></i>
            <span className="searchText">Search</span>
        </Button>
    );
}

export default ButtonComponent;

ButtonComponent.propTypes = {
    handleButtonClick: PropTypes.func.isRequired
}