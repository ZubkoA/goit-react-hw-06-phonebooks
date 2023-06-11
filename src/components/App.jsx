import Header from './Header';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import AddContacts from './AddContacts/AddContacts';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <Header title="Phonebook" />
      <AddContacts />
      <Filter />
      <Header titleContacts="Contacts" />
      <ContactList />
    </div>
  );
};

export default App;
