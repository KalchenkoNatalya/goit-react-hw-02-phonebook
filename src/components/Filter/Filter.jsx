// import { nanoid } from 'nanoid';

export const Filter = (state, filterChange) => {
// const idFilterInput = nanoid();
    return (

        <input
        type="text"
        name="filter"
        value={state.filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        // id={idFilterInput}
        // onChange={filterChange}
      
      />
    )
}