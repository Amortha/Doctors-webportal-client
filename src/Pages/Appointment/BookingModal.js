import React from 'react';
import { format } from 'date-fns'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, seTreatment,refetch }) => {
  const { _id, name, slots,price } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, 'PP');


  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;


   const booking = {
      treatmentId: _id,
      treatment:name,
      date: formattedDate,
      slot,
      price,
      patient:user.email,
      patientName:user.displayName,
      phone: event.target.phone.value
    }

    fetch('https://doctor-webportal.onrender.com/booking',{
      method:'post',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res =>res.json())
    .then(data =>{
 
    if(data.success){
      toast(`Appointment is set,${formattedDate} at ${slot}`)
    }
    else{
      toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
    }
    refetch();
    seTreatment(null)
    })

  }

  return (

    <div>
      {/* The button to open modal */}


      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-secondary">Booking for:{name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2' >
            <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
            <select name='slot' className="select select-bordered w-full max-w-xs">
              {
                slots.map((slot, index) => <option
                  key={index}
                  value={slot}
                >{slot}</option>)
              }
            </select>
            <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
            <input type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
            <input type="text" name='phone' placeholder="phone Numbar" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;