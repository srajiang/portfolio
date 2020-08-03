import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";

export const ModeToggle = ({toggleTheme}) => {

  return (
    <div onClick={toggleTheme}>
      <p>I am a toggle</p>
      <FA icon="adjust" />
    </div>
  )
}

export default ModeToggle;