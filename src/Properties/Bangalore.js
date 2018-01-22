import React from 'react';
import './properties.css'

const bangalore = (props) => {
    return (
        <div className="property-style">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <p>This is <b>{props.name}</b> and it is in {props.location}</p>
                    </div>
                    <div className="col-md-uto">
                        <button className="btn btn-outline-primary">View Property</button>
                        <button className="btn btn-default btn-sm" onClick={props.click}>
                            <span className="glyphicon glyphicon-trash"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default bangalore;