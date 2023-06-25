// import { Component } from "react";

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>{contact.name}: {contact.number}</li>
      ))}
    </ul>
  );
};
//  export class ContactList extends Component {
//   render() {
//     return (
//       <ul>
//         {this.props.contacts.map(contact => (
//           <li key={contact.id}>{contact.name}: {contact.number}</li>
//         ))}
//       </ul>
//     );
//   }
//  }