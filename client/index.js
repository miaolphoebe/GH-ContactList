import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import SingleContact from './SingleContact';
import axios from 'axios';
// const contacts = [
//   { id: 1, name: 'R2-D2', phone: '222-222-2222', email: 'r2d2@droids.com' },
//   { id: 2, name: 'C-3PO', phone: '333-333-3333', email: 'c3po@droids.com' },
//   { id: 3, name: 'BB-8', phone: '888-888-8888', email: 'bb8@droids.com' },
// ];
class Main extends Component {
  constructor() {
    super();
    this.state = { contacts: [], selectedContact: {} };
    this.selectContact = this.selectContact.bind(this);
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/contacts');
      const contacts = data;
      this.setState({ contacts });
    } catch (error) {
      console.log(error);
    }
  }
  async selectContact(contactId) {
    try {
      const { data } = await axios.get(`/api/contacts/${contactId}`);
      const selectedContact = data;
      this.setState({ selectedContact });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          {this.state.selectedContact.id ? (
            <SingleContact
              value={this.state.contacts}
              selectedContact={this.state.selectedContact}
              selectContact={this.selectContact}
            />
          ) : (
            <ContactList
              value={this.state.contacts}
              selectContact={this.selectContact}
            />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
