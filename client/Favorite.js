import React from 'react';
import axios from 'axios';

const Favorite = (props) => {
  const { contact, selectContact } = props;
  // const value = props.value;
  // const selectedContact = props.selectedContact;
  console.log('props', props);
  // console.log('contact', value);
  // console.log('selectContact', selectedContact);

  const updateFavoriteStatus = async (contactId) => {
    await axios.put(`/api/contacts/${contactId}`, {
      favorite: !contact.favorite,
    });
    selectContact(contactId);
  };

  return (
    <div
      className="fav-container"
      onClick={() => updateFavoriteStatus(contact.id)}
    >
      {contact.favorite ? (
        <img className="fav-image" src="/checked.png"></img>
      ) : (
        <img className="fav-image" src="/unchecked.png"></img>
      )}
      <span>Favorite</span>
    </div>
  );
};

export default Favorite;
