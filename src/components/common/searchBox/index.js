import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl } from "react-bootstrap";

const SearchBoxComponent = (props) => {
    const { handleNameChange } = props;
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Filter by Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(event) => {
                        handleNameChange(event.target.value);
                    }}
                />
            </InputGroup>
        </>
    );
}

export default SearchBoxComponent;

SearchBoxComponent.propTypes = {
    handleNameChange: PropTypes.func.isRequired
}