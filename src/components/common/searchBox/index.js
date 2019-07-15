import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from "react-bootstrap";

import './button.css';

const SearchBoxComponent = (props) => {
    const { handleButtonClick, handleNameChange } = props;
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(event) => {
                        handleNameChange(event.target.value);
                    }}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary"
                        onClick={() => {
                            handleButtonClick();
                        }}
                        className="searchButton"
                    >
                        <i className="fa fa-search searchIcon" aria-hidden="true"></i>
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </>
    );
}

export default SearchBoxComponent;

SearchBoxComponent.propTypes = {
    handleNameChange: PropTypes.func.isRequired,
    handleButtonClick: PropTypes.func.isRequired
}