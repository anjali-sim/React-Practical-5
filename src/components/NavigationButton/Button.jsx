import React from 'react'
import { ButtonLeftStyle } from '@styled/Button';
import { ButtonRightStyle } from '@styled/Button';
import { ButtonWrapper } from '@styled/Button';

function Button() {
  return (
    <>
    <ButtonWrapper>
       <ButtonLeftStyle />
      <ButtonRightStyle />
    </ButtonWrapper>
    </>
  )
}

export default Button