import { Component } from 'react';

export class Filter extends Component {

  handleChangeFilter = event => {
    this.props.filterChange(event.target.value);
  };

  render() {
    return (
      <input
        type="text"
        name="filter"
        value={this.props.state.filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={this.handleChangeFilter}
      />
    );
  }
}

