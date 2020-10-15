import React, { Fragment, useState, setState } from 'react';
import { addPost } from '../../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PostForm = ({ toggleForm, addPost }) => {
    const [ text, setText ] = useState([]);

    

    return (
        <Fragment>
            <form onSubmit= {e => {
                e.preventDefault();
                addPost(text);
                toggleForm();
            }}>
                <textarea name="content" placeholder="Say whats on your mind..." value={text} cols="45" rows="7" onChange={e => setText(e.target.value)} required></textarea>
                <footer className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </footer>
            </form>
        </Fragment>
    );
};

PostForm.propTypes ={
    addPost: PropTypes.func.isRequired,
}
export default connect(null, { addPost })(PostForm);