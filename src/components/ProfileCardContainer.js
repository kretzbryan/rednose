import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import  { connect } from 'react-redux';
import PropTypes from 'prop-types';


const ProfileCardContainer = ({ profile: { profiles, loading } }) => {

    const generateProfileCards = (profiles) => {
        return profiles.map((profile) => {
             return <ProfileCard key={profile._id} firstName= {profile.firstName} lastName={profile.lastName} userLocation={profile.location || 'Unknown Location'} occupation={profile.occupation || 'Unknown'} />
        })
    }

    
    return (
    <div className="profile__card__container">
        {!loading && generateProfileCards(profiles)}
    </div>
)}

ProfileCardContainer.propTypes = {
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps)(ProfileCardContainer);

