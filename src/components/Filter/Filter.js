import { Input } from "./Filter.styled";
import PropTypes from 'prop-types';

export const Filter= ({ onChange }) => {
    return (
      <>
        <h3>Find contact by name</h3>
        <Input type="text" name="filter" onChange={onChange} />
      </>
    );
}
Filter.propTypes = {
    onChange: PropTypes.func.isRequired
  };