import React from 'react'

import './ContactForm.css'

export const ContactForm = (props) => {
    const handleChange = (e) => {
        if (e.target.id === 'name') {
          props.setCurrentName(`${e.target.value}`);
        } else if (e.target.id === 'phone') {
          props.setCurrentPhone(`${e.target.value}`);
        } else if (e.target.id === 'email') {
          props.setCurrentEmail(`${e.target.value}`);
        }
    };


  return (
    <div className='form-section'>
        <h2>Contact form</h2>
        <form onSubmit={props.handleSubmit}>
            <div className='form-input'>
                <label htmlFor='name'>Name:</label>
                <input 
                    required 
                    type='text' 
                    id='name' 
                    name='name' 
                    onChange={handleChange}
                    value={props.currentName}
                />
            </div>
            <div className='form-input'>
                <label htmlFor='phone'>Phone:</label>
                <input 
                    required 
                    type='tel' 
                    id='phone' 
                    name='phone' 
                    pattern='^07([\d]{3})[(\D\s)]?[\d]{3}[(\D\s)]?[\d]{3}$'
                    onChange={handleChange}
                    value={props.currentPhone}
                />  
            </div>
            <div className='form-input'>
                <label htmlFor='email'>E-mail:</label>
                <input 
                    required 
                    type='email' 
                    id='email' 
                    name='email'
                    onChange={handleChange}
                    value={props.currentEmail}
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
