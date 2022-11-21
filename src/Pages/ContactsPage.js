import React, { useEffect, useState } from 'react'
import { ContactForm } from '../Components/ContactForm/ContactForm';
import { TileList } from '../Components/TileList/TileList';

import './ContactsPage.css';

export const ContactsPage = (props) => {
  const [ currentName, setCurrentName ] = useState('');
  const [ currentPhone, setCurrentPhone ] = useState('');
  const [ currentEmail, setCurrentEmail ] = useState('');
  const [ isDuplicate, setIsDuplicate ] = useState(false);

  const contacts = props.contacts;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDuplicate === false) {
      let name = currentName;
      let phone = currentPhone;
      let email = currentEmail;
      props.addContact(name, phone, email);
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
    } else {
      alert('That name is already taken please use another name!');
    }

  };

  useEffect(() => {
    if(contacts.length < 1) {
      return;
    }
    contacts.map((contact) => {
      if (contact.name === currentName) {
        return setIsDuplicate(true);
      }
      return setIsDuplicate(false);
    });
  }, [currentName, contacts]);

  return (
    <div className='container'>
      <h1>Contacts</h1>
      <div>
        <ContactForm 
          currentName={currentName}
          currentPhone={currentPhone}
          currentEmail={currentEmail}
          setCurrentName={setCurrentName}
          setCurrentPhone={setCurrentPhone}
          setCurrentEmail={setCurrentEmail}
          handleSubmit={handleSubmit} 
        />
      </div>
      <div>
        <TileList objects={contacts} />
      </div>
    </div>
  )
}
