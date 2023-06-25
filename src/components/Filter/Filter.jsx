
export const Filter = ({state, filterChange}) => {

    return (

        <input
        type="text"
        name="filter"
        value={state.filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={filterChange}
      
      />
    )
}