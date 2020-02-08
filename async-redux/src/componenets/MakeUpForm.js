import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index.js'

const MakeUpForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }

    return <>
    <h2>MakeUp finder</h2>
    {props.isFetchingData ? (
                 <div>Data is loading ...</div>
             ) : (
                <button onClick={handleGetData} >Get data</button>)}
         </>
    }

const mapStateToProps = state => {
    return {
        isFetchingData:state.isFetchingData
    };
};

export default connect (mapStateToProps, {getData}) (MakeUpForm);