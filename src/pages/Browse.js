import React from 'react';
import UserProfileCard from '../components/UserProfileCard';
import ProfileColumn from '../components/ProfileColumn';
import GigColumn from '../components/gigs/GigColumn'


const Browse = () => (
    <div className="row main__container">
        <UserProfileCard />
        <ProfileColumn />
        <GigColumn />
    </div>
)


export default Browse;