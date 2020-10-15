import React from 'react';
import image from '../../../public/images/default.png';


const PostHeader = ({ name }) => (
    <div className="row profile__header">
            <div className="col-2 poster__thumb">
                <img src={image} alt="" className="image__thumb" />
            </div>
            <div className="col-8 poster__name">
                <a className='anchor' href="/profile/<%= post.author._id %>">
                    <p className='options'>{name}</p>
                </a>
            </div>
            <div className="col-2 post__options">
                <a className='anchor' href="#">
                    <i className="fa fa-cog options" aria-hidden="true"></i>
                </a>
            </div>
        </div>
)

export default PostHeader;