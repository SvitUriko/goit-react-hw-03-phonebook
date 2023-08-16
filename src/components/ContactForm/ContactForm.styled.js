import styled from 'styled-components';
import { Form, Field} from 'formik';

export const StyledForm = styled(Form)`
  position: relative;
  width: 350px;
  height: 200px;
  padding: 10px 8px;

  border: 1px solid black;
`;

export const Label = styled.label`
  display: block;
  &:not(:last-of-type) {
    margin-bottom: 18px;
  }
`;

export const LabelValue = styled.span`
  display: block;
  margin-bottom: 10px;

  font-size: 20px;
`;

export const Input = styled(Field)`
  display: block;
  border: 1px solid black;
  box-shadow: 0px 0px 0px 0px rgba(171, 209, 255, 0.75);

  transition: border 50ms linear, box-shadow 50ms linear;

  &:focus {
    outline: none;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 0px 0px 4px 4px rgba(171, 209, 255, 0.75);
  }
`;

export const Btn = styled.button`
  position: absolute;
  bottom: 10px;
  left: 8px;
  display: block;
  cursor: pointer;

  background: transparent;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #cacaca;
  border-radius: 4px;

  &:active {
    background: #3f78e2;
  }
`;