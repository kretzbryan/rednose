import React from 'react';

const PostFooter = () => (
    <div className='options__footer'>
            <a className='anchor options' href="#" data-target="#delete<%= post._id %>PostModal" data-toggle="modal"><i className="fas fa-trash-alt"></i></a>
            <a className='anchor options' href="#" data-target="#edit<%= post._id %>PostModal" data-toggle="modal"><i className="fas fa-user-edit"></i></a>
        </div>
)

export default PostFooter;