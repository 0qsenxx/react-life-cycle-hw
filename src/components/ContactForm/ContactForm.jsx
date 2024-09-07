import styles from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => (
  <form onSubmit={(evt) => addContact(evt)} className={styles.contactForm}>
    <label>Name</label>
    <input
      type="text"
      name="contactName"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      className={styles.contactName}
    />
    <label className={styles.contactNumberLabel}>Number</label>
    <input
      type="tel"
      name="contactNumber"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      className={styles.contactNumber}
    />
    <button type="submit" className={styles.addContactBtn}>
      Add contact
    </button>
  </form>
);

export default ContactForm;
