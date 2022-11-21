import React, { useState } from 'react'
import { AppiontmentForm } from '../Components/AppointmentForm/AppiontmentForm';
import { TileList } from '../Components/TileList/TileList';

export const AppointmentsPage = (props) => {
  const appoinments = props.appoinments;

  const [ currentTitle, setCurrentTitle ] = useState('');
  const [ currentContact, setCurrentContact ] = useState('');
  const [ currentDate, setCurrentDate ] = useState('');
  const [ currentTime, setCurrentTime ] = useState('');

  const handleSubmit = (e)  => {
    e.preventDefault();
    let newAppointment = {
      title: currentTitle,
      contact: currentContact,
      date: currentDate,
      time: currentTime
    }
    props.addAppointment(newAppointment);
    setCurrentTitle('');
    setCurrentContact('');
    setCurrentDate('');
    setCurrentTime('');
  }

  return (
    <div className='container'>
      <h1>Appointments</h1>
      <div className='appointment-form'>
      <AppiontmentForm 
        currentTitle={currentTitle}
        currentContact={currentContact}
        currentDate={currentDate}
        currentTime={currentTime}
        setCurrentTitle={setCurrentTitle}
        setCurrentContact={setCurrentContact}
        setCurrentDate={setCurrentDate}
        setCurrentTime={setCurrentTime}
        handleSubmit={handleSubmit}
        contacts={props.contacts}
      />
      </div>
      <div className='appointments'>
        <TileList objects={appoinments} />
      </div>
    </div>
  )
}

