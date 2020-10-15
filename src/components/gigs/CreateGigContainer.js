import React, { useState } from 'react'
import PropTypes from 'prop-types';
import GigForm from '../gigs/GigForm'

const CreateGigContainer = props => {
    const [formOpen, setFormOpen ] = useState(false)

    const toggleForm = () => {
        setFormOpen(!formOpen);
    }

    return (
        <div className='create-gig__container'>
        <a className='create__gig__anchor' href="#" onClick={toggleForm} >+</a>
        { formOpen && <GigForm toggleForm={toggleForm}/> }
        </div>
    )
}

CreateGigContainer.propTypes = {

}

export default CreateGigContainer
