import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  margin-bottom: 20px;
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