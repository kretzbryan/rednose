import React from 'react';
import GigColumn from '../components/gigs/GigColumn';
import PostColumn from '../components/posts/PostColumn';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfileCard from '../components/UserProfileCard';

const ProfileDetail = () => (
    <div className="row main__container">
        <UserProfileCard />
        <PostColumn />
        <GigColumn />
    </div>
)


export default ProfileDetail;