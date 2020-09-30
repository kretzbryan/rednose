import React from 'react';
import GigHeader from './GigHeader';
import GigDescription from './GigDescription';
import GigOptions from './GigOptions';

const GigCard = (props) => (
    <div className="row card gig__container">
        <GigHeader text={props.title} />
        <GigDescription text={props.description} />
        <GigOptions />
    </div>
)


export default GigCard;


/* 

                <!-- Edit Gig Modal -->
            <div class="modal fade" id="edit<%= gig._id %>GigModal">
                <div class="modal-dialog modal-dialog-centered modal-dialog modal-dialog-centered-centered">
                    <div class="modal-content">
                        <header class="modal-header">
                            <h5 class="modal-title" id="edit__gig__title">Edit Gig </h5>
                        </header>
                        <div class="modal-body">


                        <!-- Edit Gig Form-->
                            <div class="edit__gig__container">
                                <form action="home/edit-gig/<%= gig._id %>?_method=PUT" method="POST">
                                    <div class="form-group">
                                        <label for="location">Location</label>
                                        <input type="text" name="location" placeholder="Where are you located?" value='<%= gig.location %>'>
                                    </div>
                                    <div class="form-group">
                                        <label for="title">What are you offering?</label>
                                        <input type="text" name="title" value='<%= gig.title %>' placeholder='What are you offering?'>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Description</label>
                                        <textarea name="description" placeholder="Description..." cols="45" rows="4"> <%= gig.description %> </textarea>
                                    </div>
                                    <input type="hidden" name="author" value="<%= currentUser._id %>">
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
                <!-- End Edit Gig Modal -->


                    <!-- Delete Gig Modal -->
            <div class="modal fade" id="delete<%= gig._id %>GigModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <header class="modal-header">
                            <h5 class="modal-title" id="edit__gig__title">Edit Gig </h5>
                        </header>
                        <div class="modal-body">
                        <!-- Delete Gig Form-->
                            <div class="edit__gig__container">
                                <form action="home/delete-gig/<%= gig._id %>?_method=DELETE" method="post">
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
            <!-- End Delete Modal -->

        <% } %> */