import { Item, Text, Btn } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, deleteContact }) => {
    return (
      <Item id={id}>
        <Text>
          {name}: {number}
        </Text>
        <Btn type="button" name="delete" onClick={() => deleteContact(id)}>
          Delete
        </Btn>
      </Item>
    );
  };

  ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
  };