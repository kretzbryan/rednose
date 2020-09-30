import React,  { Fragment } from 'react';
import ModalHeader from '../modals/ModalHeader'
import ModalBody from '../modals/ModalBody';

const Modal = () => (
    <Fragment>
        <div className="modal" id="addPostModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <ModalHeader />
                    <ModalBody />
                </div>
            </div>
        </div>
    </Fragment>
)


export default Modal;