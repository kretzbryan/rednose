import React, { useState, useEffect } from 'react';
import GigCard from './GigCard';
import { register } from '../forms/forms';

const { firstName, lastName, username, email, password } = register;

const GigColumn = () => {
    const [ gigs, setGigs ] = useState([]);

    const generateGigs = (gigs) => {
        return gigs.map((gig) => {
            return <GigCard title={gig.title} description={gig.description} />
        })
    }

    useEffect(() => {
        fetch('http://localhost:4000/gigs')
        .then((res) =>  res.json())
        .then((json) => {
            setGigs(json.gigs)
        })
    }, [])


    return (
    <div className='gig__column'>
        {generateGigs(gigs)}
    </div>
)}

export default GigColumn;