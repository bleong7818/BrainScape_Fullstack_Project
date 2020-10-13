import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const MSTP = ( {errors} ) => {
    return {
        errors: errors.session,
        formType: "Login",
        navLink: <Link to="/signup"></Link>
    };
};

const MDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user))
    };
};

export default connect(MSTP, MDTP)(SessionForm);