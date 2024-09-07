import styles from "./ContactsList.module.css";

const ContactsList = ({ contacts, filter, deleteContact }) => (
  <ul>
    {filter.length !== 0
      ? contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact) => (
            <li key={contact.id} className={styles.contactItem}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                data-id={contact.id}
                onClick={(evt) => deleteContact(evt)}
              >
                Delete
              </button>
            </li>
          ))
      : contacts.map((contact) => (
          <li key={contact.id} className={styles.contactItem}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              data-id={contact.id}
              onClick={(evt) => deleteContact(evt)}
            >
              Delete
            </button>
          </li>
        ))}
  </ul>
);

export default ContactsList;
