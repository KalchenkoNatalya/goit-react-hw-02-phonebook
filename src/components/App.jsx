import css from './App.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  inputChange = e => {
    this.inputValue = e.target.value;
    console.log(this.inputValue);
  };

  handleSubmit = e => {
    e.preventDefault();
   
    const newContact = {
      idContact: nanoid(),
      name: this.inputValue,
    };

    console.log(newContact);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    this.inputValue = '';
  };
  InputId = nanoid();
  render() {
    return (
      <div className={css.wrap}>
        <h2>Phonebook</h2>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.InputId.toString()}>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.InputId}
            onChange={this.inputChange}
            required
          />
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
