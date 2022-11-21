import React from 'react'
import { ContactPicker } from '../ContactPicker/ContactPicker'

import './AppointmentForm.css'

export const AppiontmentForm = (props) => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    const handleChange = (e) => {
        if (e.target.id === 'title') {
          props.setCurrentTitle(`${e.target.value}`);
        } else if (e.target.id === 'date') {
          props.setCurrentDate(`${e.target.value}`);
        } else if (e.target.id === 'time') {
          props.setCurrentTime(`${e.target.value}`);
        } else if (e.target.id === 'contact') {
          props.setCurrentContact(`${e.target.value}`);
        }
    };

    
  return (
    <div className='form-section'>
        <h2>Appointment form</h2>
        <form onSubmit={props.handleSubmit}>
            <div className='form-input'>
                <label htmlFor='contact'>Contact:</label>
                <ContactPicker
                    contacts={props.contacts}
                    onChange={handleChange}
                    currentContact={props.currentContact}
                />
            </div>
            <div className='form-input'>
            <label htmlFor='title'>Title:</label>
            <input 
                id='title' 
                type='text' 
                value={props.currentTitle}
                required
                onChange={handleChange}
            />
            </div>
            <div className='form-input'>
                <label htmlFor='date'>Date:</label>
                <input 
                    id='date' 
                    type='date' 
                    min={formattedDate} 
                    value={props.currentDate}
                    required
                    onChange={handleChange}
                />
            </div>
            <div className='form-input'>
                <label htmlFor='time'>Time:</label>
                <input 
                    id='time' 
                    type='time' 
                    value={props.currentTime}
                    required
                    onChange={handleChange}
                />
            </div>
            <input 
                type='submit'
                value='Submit'
                className='btn'
                onSubmit={props.handleSubmit} 
            />
        </form>
    </div>
  )
}
