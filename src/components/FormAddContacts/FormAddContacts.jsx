import css from './FormAddContacts.module.css'
import { nanoid } from 'nanoid';

export const FormAddContacts  = ({handleSubmit, inputChange, state, }) => {
    const idNameInput = nanoid();
    const idNumberInput = nanoid();
    return (
        <form className={css.form} onSubmit={handleSubmit}>
          <label htmlFor={idNameInput}>Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={idNameInput}
            onChange={inputChange}
            required
          />
          <label htmlFor={idNumberInput}>Number</label>
          <input
            type="tel"
            name="number"
            value={state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={idNumberInput}
            onChange={inputChange}
            required
          />
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
    )
}