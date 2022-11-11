import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const Services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity',
            description: '',
            img: cavity

        },
        {
            _id: 3,
            name: 'Teeth whitening',
            description: '',
            img: whitening
        },
    ]
    return (
        <div className='my-36'>
            <div className='text-center '>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl  '>Services we Provide</h2>
            </div>
            <div className='grid mt-12 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    Services.map(service =><Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;