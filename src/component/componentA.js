import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { test } from '../actions/action_test'

const componentA = (props) => {
    return (
        <div>
            HELLO FROM A
            <button onClick={props.test}>{props.yourtest}</button>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        yourtest: state.test,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    test

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(componentA);