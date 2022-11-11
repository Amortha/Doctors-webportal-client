import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>Get Results for Dental Clinic Los Angeles. Find Quick Results from Multiple Sources. 
            Search for Dental Clinic Los Angeles
          </p>
          <div className="flex items-center">
          <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
    <img src={review.img} alt="pic" />
  </div>
</div>
<div>
    <h4 className='text-xl'>{review.name}</h4>
    <p>{review.location}</p>
</div>

          </div>
        </div>
      </div>
    );
};

export default Review;