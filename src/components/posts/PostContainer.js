import React from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';

const PostContainer = () => (
    <div className="row card post__container">
        <PostHeader />
        <PostContent />
        <PostFooter />
    </div>
)

export default PostContainer;