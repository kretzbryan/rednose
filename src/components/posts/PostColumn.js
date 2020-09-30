import React,{ useState, useEffect } from 'react';
import CreatePostContainer from './CreatePostContainer';
import PostContainer from './PostContainer';


const PostColumn = props => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/posts')
        .then((res) => res.json())
        .then((json) => {
            setPost(json.posts)
        })
    }, [])

    return (
    <div className="post__column">
        <CreatePostContainer />
        <PostContainer />
    </div>
)}


export default PostColumn;

/* 
                        <!-- Edit Post Modal -->
                        <div class="modal fade" id="edit<%= post._id %>PostModal">
                        <div class="modal-dialog modal-dialog-centered modal-dialog modal-dialog-centered-centered">
                            <div class="modal-content">
                                <header class="modal-header">
                                    <h5 class="modal-title" id="edit__gig__title">Edit Post </h5>
                                </header>
                                <div class="modal-body">


                                <!-- Edit Post Form-->
                                    <div class="edit__gig__container">
                                        <form action="home/edit-post/<%= post._id %>?_method=PUT" method="POST">
                                            <textarea name="content" placeholder="Say whats on your mind..." cols="45" rows="7"><%= post.content %></textarea>
                                            <input type="hidden" name="author" value='<%= currentUser._id %>'>
                                            <footer class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="submit" class="btn btn-primary">Confirm</button>
                                            </footer>
                                        </form>
                                        <!-- End Edit Form -->

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <!-- End Edit Post Modal -->

                        <!-- Delete Post Modal -->
                    <div class="modal fade" id="delete<%= post._id %>PostModal">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <header class="modal-header">
                                    <h5 class="modal-title" id="edit__gig__title">Edit Gig </h5>
                                </header>
                                <div class="modal-body">
                                <!-- Delete Post Form-->
                                    <div class="edit__post__container">
                                        <form action="home/delete-post/<%= post._id %>?_method=DELETE" method="post">
                                            <h4>Are you sure you want to delete this post?</h4>
                                            <footer class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button class='btn btn-primary'type=submit>Delete</button>
                                            </footer>
                                        </form>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Delete Post Modal --> */