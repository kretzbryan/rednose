import React from 'react';
import image from '../../../public/images/default.png';

const GigHeader = ({title, location}) => (
    <div className="row gig__header">
        <div className="col-2 gig__thumb">
            <a href="profile/<%=gig.author._id%>">
                <img src={image} alt="" className="image__thumb"/>
            </a>
        </div>
        <p className='col-8 gig__name'>{title}</p>
    </div>
)


export default GigHeader;