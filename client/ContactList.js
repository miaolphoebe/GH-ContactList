import React from 'react';

export default function ContactList(props) {
  const { contacts, selectContact } = props;
  const contactName = props.value.map((item) => {
    return (
      <tr key={item.id} onClick={() => props.selectContact(item.id)}>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {contactName}
      </tbody>
    </table>
  );
}
