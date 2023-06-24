export const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.idContact}>{contact.name}</li>
      ))}
    </ul>
  );
};
