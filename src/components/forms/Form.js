import React, { Fragment } from 'react';

const Form = () => {
    return (
        <Fragment>
            <form action="home/edit-post/<%= post._id %>?_method=PUT" method="POST">
                <textarea name="content" placeholder="Say whats on your mind..." cols="45" rows="7"></textarea>
                <input type="hidden" name="author" value='<%= currentUser._id %>'/>
                <footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </footer>
            </form>
        </Fragment>
    );
};

export default Form;