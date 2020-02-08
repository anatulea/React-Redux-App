import React from 'react';
import  { connect } from 'react-redux';

const MakeUpList = props => {
    return <>
        { props.error ? (<div className="error">{props.error}</div>) :( props.makeup.map(item =>(
            <div>
                {item.name}
            </div>
            )
        ))}
    </>
}

const mapStateToProps = state => {
    return {
        makeup:state.makeup, error : state.error
    };
};

export default connect(mapStateToProps, {}) (MakeUpList)