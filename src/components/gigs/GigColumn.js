import React, { useState, useEffect } from 'react';
import GigCard from './GigCard';
import { register } from '../forms/forms';
import CreateGigContainer from '../gigs/CreateGigContainer';
import { connect } from 'react-redux';
import { getGigs } from '../../actions/gig';
import PropTypes from 'prop-types';


const GigColumn = ({ getGigs, gig: { gigs } }) => {
    useEffect(() => {
       getGigs()
    }, [getGigs])
    return (
    <div className='gig__column'>
        <CreateGigContainer />
        { gigs.map( gig => (
            <GigCard key={gig._id} gig={gig} />
        ))}
    </div>
)}

GigColumn.propTypes = {
    getGigs: PropTypes.func.isRequired,
    gig: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    gig: state.gig
})

export default connect(mapStateToProps, { getGigs })(GigColumn);