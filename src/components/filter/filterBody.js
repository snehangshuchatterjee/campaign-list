import React from 'react';
import DatePickerComponent from '../common/datePicker';
import SearchBoxComponent from '../common/searchBox';
import { Container, Row, Col } from 'react-bootstrap';

import './filter.css';

const FilterBodyComponent = (props) => {
    const {
        handleStartDateChange,
        handleEndDateChange,
        handleNameChange,
        handleButtonClick
    } = props;

    return (
        <>
            <Container>
                <Row className="rowPadding">
                    <Col xs={6} className="autoMargin">
                        <DatePickerComponent handleStartDateChange={handleStartDateChange} 
                            handleEndDateChange={handleEndDateChange}
                        />
                    </Col>
                    <Col xs={1} ></Col>
                    <Col xs={3} className="autoMargin">
                        <SearchBoxComponent handleNameChange={handleNameChange}
                            handleButtonClick={handleButtonClick}
                        />
                    </Col>
                    <Col xs={1} ></Col>
                </Row>
            </Container>
        </>
    );
}

export default FilterBodyComponent;