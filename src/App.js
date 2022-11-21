import { 
  BrowserRouter, 
  NavLink, 
  Navigate, 
  Route, 
  Routes
} from 'react-router-dom';
import { useState } from 'react';

import { AppointmentsPage } from './Pages/AppointmentsPage';
import { ContactsPage } from './Pages/ContactsPage';
import './App.css';



function App() {
  const [ contacts, setContacts ] = useState([]);
  const [ appoinments, setAppointments ] = useState([]);

  const addContact = (name, phone, email) => {
    let newContact = {
      name: name,
      phone: phone,
      email: email
    };
    setContacts(prev => [...prev, newContact]);
  }

  const addAppointment = (newAppointment) => {
    setAppointments(prev => [...prev, newAppointment]);
  };

  return (
      <BrowserRouter>
        <nav>
          <div className='logo'>
            <h1>Appointment planner</h1>
          </div>
          <div className='links'>
            <NavLink to='/contacts' >Contacts</NavLink>
            <NavLink to='/appointments' >Appointments</NavLink>
          </div>
        </nav>
        <Routes>
          <Route 
            path='/'
            element={
              <Navigate 
                to='/contacts' 
                
              />
            } 
          />
          <Route path='/contacts' element={
            <ContactsPage 
              contacts={contacts}
              addContact={addContact} 
            />
          } />
          <Route path='/appointments' element={
            <AppointmentsPage 
              appoinments={appoinments}
              contacts={contacts}
              addAppointment={addAppointment}
            />
          } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
