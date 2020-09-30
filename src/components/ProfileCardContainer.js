import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';

const ProfileCardContainer = () => {
    const [profiles, setProfiles] = useState([]);

    const generateProfileCards = (profiles) => {
        return profiles.map((profile) => {
             return <ProfileCard key={profile._id} firstName= {profile.firstName} lastName={profile.lastName} userLocation={profile.location || 'Unknown Location'} occupation={profile.occupation || 'Unknown'} />
        })
    }

    useEffect(() => {
        fetch('http://localhost:4000/profiles')
        .then((res) => res.json())
        .then((json) => {
            setProfiles(json.profiles)
        })
    }, []) 
    
    return (

    <div className="profile__card__container">
        {generateProfileCards(profiles)}
    </div>
)}

export default ProfileCardContainer;

