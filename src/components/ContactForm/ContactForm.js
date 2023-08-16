import { Formik } from 'formik';
import { Btn, Input, Label, LabelValue, StyledForm } from './ContactForm.styled';
import PropTypes from 'prop-types';

export const ContactForm = ({ onAdd }) => {
    return (
      <Formik
        initialValues={{
          name: '',
          number:'',
        }}
     
        onSubmit={(values, actions) => {
          onAdd({ ...values});
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            <LabelValue>Name</LabelValue>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />   
          </Label>
  
          <Label>
          <LabelValue>Number</LabelValue>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />   
          </Label>
 
          <Btn type="submit">Add contact</Btn>
        </StyledForm>
      </Formik>
    );
  };

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired
  };