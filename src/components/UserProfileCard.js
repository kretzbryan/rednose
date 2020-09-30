import React from  'react';
import image from '../../public/images/default.png';

const UserProfileCard = () => (
    <div className="card user__profile__card">
        <img className='profile__image' src={image} alt="profile image"/>
        <a className="edit__modal__anchor anchor" href="#" data-toggle="modal" data-target="#profilePhotoModal"><p className ='options'>edit photo</p></a>
        <a className="edit__modal__anchor anchor" href="#" data-toggle="modal" data-target="#editModal"><p className ='options'>edit profile</p></a>
        <h5 className="card-title"></h5>
    </div>
)

export default UserProfileCard;