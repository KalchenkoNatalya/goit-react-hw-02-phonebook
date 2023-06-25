import css from './App.module.css';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  filterChange = value => {
    this.setState({ filter: value });
  };

  addContacts = (name, number) => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    existingContact
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            { id: nanoid(), name: name, number: number },
          ],
        }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div className={css.wrap}>
        <h2>Phonebook</h2>
        <FormAddContacts addContacts={this.addContacts} />
        <h2>Find contacts by name</h2>
        <Filter state={this.state} filterChange={this.filterChange} />

        <h2>Contacts</h2>
        {this.state.filter === '' ? (
          <ContactList contacts={this.state.contacts} />
        ) : (
          <ContactList contacts={filteredContacts} />
        )}
      </div>
    );
  }
}
