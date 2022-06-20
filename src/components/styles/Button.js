import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  height: 120px;
  width: 120px;
  border: 3px solid lightblue;

  &:disabled {
    opacity: 1;
    cursor: default;
    border: 1px solid grey;
  }

`;

export default Button;