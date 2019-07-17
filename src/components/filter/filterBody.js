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
                    <Col sm={12} md={6}>
                        <DatePickerComponent handleStartDateChange={handleStartDateChange}
                            handleEndDateChange={handleEndDateChange}
                        />

                    </Col>
                    <Col sm={12} md={3}>
                        <SearchBoxComponent handleNameChange={handleNameChange} />
                    </Col>
                    <Col sm={12} md={3}>
                        <ButtonComponent handleButtonClick={handleButtonClick} />
                    </Col>
                </Row>
             
                {/* <Row className="rowPadding">
                    <Col xs={12} md={12} className="autoMargin">
                        <ButtonComponent handleButtonClick={handleButtonClick} />
                    </Col>
                </Row> */}
            </Container>
        </>
    );
}

export default FilterBodyComponent;