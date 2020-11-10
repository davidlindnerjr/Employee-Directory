import React from 'react';

const Employees = ({ id, name, role, department, img }) => {

    return(
        <>
        <div className="card card-style ">
            <img className="card-img-top" src={ img } alt="employee"/>
            <div className="card-body">
                <h5 className="card-title"><strong>{ name }</strong></h5>
                <p className="card-text"><strong>Role: </strong>{ role }</p>
                <p className="card-text"><strong>Department: </strong>{ department }</p>
            </div>
        </div>
        </>
    );
}

export default Employees;