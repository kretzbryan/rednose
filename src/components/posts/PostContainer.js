import React from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import auth from '../../actions/auth';
import post from '../../actions/post';



const PostContainer = ({auth, post: { name, text, _id , user  } }) => {
    

    return (
    <div className="row card post__container">
        <PostHeader name={name}  />
        <PostContent text={text} />
        <PostFooter id={_id} user={user} />
    </div>
)}

PostContainer.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { auth, post})(PostContainer);