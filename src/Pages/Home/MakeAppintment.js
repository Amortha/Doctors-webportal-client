import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppintment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mt-44'>
            <div className='flex-1 hidden lg:block'>
                <img className="mt-[-150px]" src={doctor} alt=''></img>
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold'>Apppointment</h3>
                <h2 className='py-2 text-3xl text-white'>Make an Apppointment Today</h2>
                <p className=' pb-2 text-white'>Lorem ipsum is placeholder text commonly used in the graphic, print, and 
                    publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text
                     commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
             
                </p>
                <PrimaryButton >Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppintment;