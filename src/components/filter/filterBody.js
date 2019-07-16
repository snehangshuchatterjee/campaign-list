import React from 'react';
import DatePickerComponent from '../common/datePicker';
import SearchBoxComponent from '../common/searchBox';
import { Container, Row, Col } from 'react-bootstrap';

import './filter.css';
import ButtonComponent from '../common/button';

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
                    <Col xs={8} className="autoMargin">
                        <DatePickerComponent handleStartDateChange={handleStartDateChange}
                            handleEndDateChange={handleEndDateChange}
                        />
                        <SearchBoxComponent handleNameChange={handleNameChange}
                        />
                    </Col>
                    <Col xs={2} className="autoMargin">
                        <ButtonComponent handleButtonClick={handleButtonClick} />
                    </Col>
                    <Col xs={2} ></Col>
                </Row>
            </Container>
        </>
    );
}

export default FilterBodyComponent;