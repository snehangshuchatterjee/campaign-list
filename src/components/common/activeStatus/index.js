import React from 'react';
import PropTypes from 'prop-types';

import './activeStatus.css';

const ActiveStatusComponent = (props) => {
    const { isActive } = props;

    return (
        <>
            {
                isActive ?
                    <div>
                        <i className="fa fa-circle active" aria-hidden="true"></i>
                        <span className="activeStatusText">
                            Active
                        </span>
                    </div>
                    :
                    <div>
                        <i className="fa fa-circle inactive" aria-hidden="true"></i>
                        <span className="activeStatusText">
                            Inactive
                        </span>
                    </div>
            }
        </>
    );
}

export default ActiveStatusComponent;

ActiveStatusComponent.propTypes = {
    isActive: PropTypes.bool.isRequired
}