import { styled } from '@mui/material/styles';
import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface IButton extends ButtonProps {
  mycolor: string;
}

const MyButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== '#cdcdcd',
})<IButton>(({ mycolor }) => ({
  width: 230,
  margin: 1,
  background: mycolor,
  color: '#fff',
  transition: '0.5s',
  ':hover': {
    backgroundColor: '#fff',
    color: 'rgb(94, 73, 255)',
  },
}));

export const CustomButton = ({ onClick, children }: any) => (
  <MyButton onClick={onClick} mycolor="rgb(94, 73, 255)">
    {children}
  </MyButton>
);

export default {};
