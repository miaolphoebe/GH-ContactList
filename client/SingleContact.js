import React from 'react';
import Favorite from './Favorite';

export default function SingleContact(props) {
  // const contactName = props.value.map((item) => {
  //   return (
  //     <tr key={item.id}>
  //       <td>{item.name}</td>
  //       <td>{item.phone}</td>
  //       <td>{item.email}</td>
  //     </tr>
  //   );
  // });
  //const { value, selectedContact, selectContact } = props;
  // const contacts = props.value;
  // const selectedContact = props.selectedContact;
  console.log('props in single', props);
  return (
    <div id="single-contact">
      <img src={props.selectedContact.imageUrl} />
      <div id="contact-info">
        <p>Name: {props.selectedContact.name}</p>
        <p>Email: {props.selectedContact.email}</p>
        <p>Phone: {props.selectedContact.phone}</p>
      </div>
      <Favorite
        contacts={props.value}
        contact={props.selectedContact}
        selectContact={props.selectContact}
      />
    </div>
  );
}
