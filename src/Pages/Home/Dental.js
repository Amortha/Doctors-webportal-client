import React from 'react';
import Treatment from '../../assets/images/treatment.png'
const Dental = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl grid lg:grid-cols-2 sm:grid-cols-1">
          <div   >
          <figure><img className='w-9/12 ' src={Treatment} alt="Movie"/></figure>
          </div>
       
        <div className="lg:mt-32 ">
          <h2 className="card-title text-5xl">Exceptional Dental care, on Your Terms</h2>
          <p className='text-xl my-8'>Get Results for Dental Clinic Los Angeles. Find Quick Results from Multiple Sources. 
            Search for Dental Clinic Los Angeles and Discover Millions of Results. Multiple Sources Combined. 
            Fast and Trusted. Discover Us Now! Simple in Use. All the Answers.</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
};

export default Dental;