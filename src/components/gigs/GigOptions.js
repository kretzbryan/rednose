import React from 'react';

const GigOptions = () => (
    <div className='options__footer'>
        <a className='options' href="#" data-target="#delete<%= gig._id %>GigModal" data-toggle="modal"><i className="fas fa-trash-alt"></i></a>
        <a className='options' href="#" data-target="#edit<%= gig._id %>GigModal" data-toggle="modal"><i className="fas fa-user-edit"></i></a>
    </div>
)

export default GigOptions;