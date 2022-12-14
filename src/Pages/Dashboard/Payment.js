import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MDsIyAYUl9xJn4VeQqRi2Rc4k0ypgszcItcQTcsaCH6LksTJ24Q1g7tqujBc1c576URtpSXDtOqG7lzJvNypDmZ00gXLu1GGW');

const Payment = () => {
  const { id } = useParams();
  const url = `https://doctor-webportal.onrender.com/booking/${id}`

  const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <p className='text-success font-bold'>Hello, {appointment.patientName}</p>
          <h2 className="card-title">Please pay for{appointment.treatment}</h2>
          <p> Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
          <p>Please Pay: ${appointment.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 mt-24 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>

        </div>
      </div>
    </div>

  );
};

export default Payment;