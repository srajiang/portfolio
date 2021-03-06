import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";

const Toggle = styled.button`
  outline: none;
  cursor: pointer;
  background: transparent;
  border:none;
  font-size: 1.25rem;
  position: absolute;
  top: -8px;
  left: 50px;

  color: ${({theme}) => theme.text};
`;

export const ModeToggle = ({toggleTheme}) => {

  return (
    <Toggle onClick={toggleTheme}>
      <FA icon="adjust" />
    </Toggle>
  )
}

export default ModeToggle;