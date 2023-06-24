import css from './App.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''

  };
  inputChange = e => {
  const {name, value} = e.target;
    // this.inputValue = e.target;
    this.setState({[name]: value})
 
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state

    const newContact = {
      idContact: nanoid(),
      name: name,
      number: number,

    };

    console.log(newContact);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    this.inputValue = '';
  };
  idNameInput = nanoid();
  idNumberInput = nanoid();

  render() {
    return (
      <div className={css.wrap}>
        <h2>Phonebook</h2>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.idNameInput}>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.idNameInput}
            onChange={this.inputChange}
            required
          />
          <label htmlFor={this.idNumberInput}>Number</label>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={this.idNumberInput}
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
