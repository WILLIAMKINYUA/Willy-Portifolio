import React, { useState } from 'react';
import './ContactImage.css'; // Import your CSS file for styling
import { ContactData } from '../../Contact'; // Import ContactData assuming it's an array of contact items

const ContactImage = () => {
  const [contacts, setContacts] = useState(ContactData); // Initialize state with ContactData assuming it's an array of contact items

  const filterContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => contact.id === contactId);
    setContacts(filteredContacts);
  }

  return (
    <div>
      {contacts.map((contact) => (
        <div className='aboutImage' key={contact.id}>
          <img src={contact.image} alt='Not Applicable' className='imageAbout' />  
        </div>
      ))}
    </div>
  );
}

export default ContactImage;
