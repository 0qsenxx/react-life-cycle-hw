const Filter = ({findContact}) => (
  <>
    <p>Find contacts by name</p>
    <input
      type="text"
      name="contactsFilter"
      onInput={(evt) => findContact(evt)}
    />
  </>
);

export default Filter;