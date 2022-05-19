import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";
import error from '../../../style/images/error.svg';

export const ErrorDetail = (props) => {
    return (
        <div className="exception-body error-page">
            <div className="exception-type">
                <img src={error} alt="Unexpected error" />
            </div>
            <div className="card exception-panel">
                <i className="material-icons">error</i>
                <h1>Hata Oluştu</h1>
                <div className="exception-detail">
                    <h3>Mesaj</h3>
                    {JSON.stringify(props.error.message)}
                </div>
                <Link to="/" className="btn btn-primary mb-2">Homepage</Link>
            </div>
        </div>
    );
};

ErrorDetail.propTypes = {
    error: PropTypes.object,
    componentStack: PropTypes.string
};
