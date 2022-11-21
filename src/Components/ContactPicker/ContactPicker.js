import React from 'react'

export const ContactPicker = (props) => {

  return (
    <select value={props.currentContact} onChange={props.onChange} id='contact'>
        <option default value='None Selected'>None selected</option>
        {props.contacts.map((contact, index) => {
            return (
                <option key={index} value={contact.name}>{contact.name}</option>
            )
        })}
    </select>
  )
}
