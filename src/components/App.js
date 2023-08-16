import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (contacts !== null) {
      this.setState({
        contacts : parsedContacts
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  addContact = ({ name, number }) => {
    if (
      this.state.contacts.some(
        contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number.toLowerCase() === number.toLowerCase()
        )
        ) {
          alert(`${name} or entered number is already in contacts.`);
          return;
        }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
  
  contactsFilterHandler = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  filterContacts() {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
    
  deleteContact = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(el => el.id !== id) };
    });
  };
    

render(){
  const filteredContacts = this.filterContacts();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChange={e => {this.contactsFilterHandler(e);}}/>
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact}/>
      </div>
            
    </div>
  );
}
  
};
