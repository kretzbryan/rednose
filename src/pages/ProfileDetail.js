import React from 'react';
import GigColumn from '../components/gigs/GigColumn';
import PostColumn from '../components/posts/PostColumn';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfileCard from '../components/UserProfileCard';
import { connect } from 'react-redux';
import auth from '../actions/auth';
import profile from '../actions/profile';
import PropTypes from 'prop-types';


const ProfileDetail = ({ auth, profile: { profile } }) => (
    <div className="row main__container">
        <UserProfileCard 
            name={`${profile.user.firstName} ${profile.user.lastName}`} 
        />
        <PostColumn posts/>
        <GigColumn />
    </div>
)

ProfileDetail.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    post: state.post
})

export default connect(mapStateToProps, {})(ProfileDetail);