import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointments = ({date}) => {
    const [services,setServices] = useState([]);
   const [treatment,seTreatment] = useState(null);
    useEffect(()=>{
       fetch('http://localhost:5000/service')
       .then(res => res.json())
       .then(data =>setServices(data)); 
    },[])
    return (
        <div>
         <h4 className='text-xl text-secondary text-center font-bold my-12'>AvailableAppointments on {format(date, 'PP')}</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
               services.map(service=><Service
               key={service._id}
               service={service}
               seTreatment={seTreatment}
               ></Service>) 
            }
        </div>
        {treatment && <BookingModal 
        date={date} 
        treatment={treatment}
        seTreatment={seTreatment}
        ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;