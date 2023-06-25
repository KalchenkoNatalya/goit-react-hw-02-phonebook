import css from './App.module.css';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };
  inputChange = e => {
    // const {name, value} = e.target;
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    console.log(newContact);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css.wrap}>
        <h2>Phonebook</h2>
        <FormAddContacts
          state={this.state}
          inputChange={this.inputChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Find contacts by name</h2>
        <Filter state={this.state} />

        <h2>Contacts</h2>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
