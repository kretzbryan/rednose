import React from 'react';
import ProfileCardText from './ProfileCardText';
import image from '../../public/images/default.png';

const ProfileCard = (props) => (
    <div className="profile__card">
        <img src={image} alt="" className="profile__image"/>
        <ProfileCardText text={props.firstName + ' ' + props.lastName} />
        <ProfileCardText text={props.userLocation} />
        <ProfileCardText text={props.occupation} />
    </div>
)

export default ProfileCard;