import React, { useState } from 'react';
import PostForm from '../forms/PostForm';
import image from '../../../public/images/default.png';



const CreatePostContainer = () => {
    const [formOpen, setFormOpen ] = useState(false)

    const toggleForm = () => {
        setFormOpen(!formOpen);
    }
    
    return (
    <div className="row card create__post">
        <img src={image} alt="profile thumbnail" className="create__post__thumb" />
        <a onClick={toggleForm} data-toggle="modal" data-target="#addPostModal" className='create__post__caption anchor'>
            <p className='options'>Say Something!</p>
        </a>
        { formOpen === true && <PostForm toggleForm={ toggleForm }/> }
    </div>
)}

export default CreatePostContainer;