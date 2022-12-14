import React from 'react';

const Service = ({ service ,seTreatment}) => {
    const {name ,slots,price} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>{
                   slots.length >0
                   ?<span>{slots[0]}</span> 
                   :<span className='text-red-500'>Try Another date</span> 
                    }
                </p>
                
                <p>{slots.length} {slots.length>1 ?'spaces': 'space'} available</p>
                <p><small>price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <button 
                    className=""></button>
                    <label htmlFor="booking-modal"
                    disabled={slots.length === 0} 
                    onClick={()=>seTreatment(service)}
                    className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">
                        Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;