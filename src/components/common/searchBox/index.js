import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Button } from "react-bootstrap";

import './button.css'

class SearchBoxComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.filterValue = React.createRef();
    }

    handleFilterButtonClick = () => {
        const { handleButtonClick } = this.props;

        handleButtonClick(this.filterValue.current.value);
    }

    render = () => {
        const { handleNameChange } = this.props;
        return (
            <>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        ref={this.filterValue}
                        onChange={() => {
                            handleNameChange(this.filterValue.current.value)
                        }}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary"
                            onClick={() => {
                                this.handleFilterButtonClick(this.filterValue.current.value)
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
}

export default SearchBoxComponent;

SearchBoxComponent.propTypes = {
    handleNameChange: PropTypes.func.isRequired,
    handleButtonClick: PropTypes.func.isRequired
}