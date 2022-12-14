import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date }) => {
    
    const [treatment, seTreatment] = useState(null);

    const formattedDate = format(date, 'PP')
    const{data:services, isLoading, refetch} = useQuery(['available',formattedDate],()=>  fetch(`https://doctor-webportal.onrender.com/available?date=${formattedDate}`)
     .then(res => res.json()))
     if(isLoading){
        return <Loading></Loading>
     }

    return (
        <div>
            <h4 className='text-xl text-secondary text-center font-bold my-12'>AvailableAppointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services?.map(service => <Service
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
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;