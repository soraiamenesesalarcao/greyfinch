import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  height: 120px;
  width: 120px;

  &:disabled {
    opacity: 1;
    cursor: default;
  }
`;

export default Button;