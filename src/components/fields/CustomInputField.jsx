import React from 'react';

import { createTheme } from '@mui/material';

import TextField from '@mui/material/TextField';

const theme = createTheme({
  palette: {
    background: {
      bgcolor: 'rgb(94, 73, 255)',
    },
  },
});

const BetAmountField = (props) => {
  const {
    setValue,
    valueType,
    minValue,
    maxValue,
    label,
    valueId,
    setDefaultValue,
  } = props;

  const setValueOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      theme={theme}
      id={valueId}
      label={label}
      type={valueType}
      variant="standard"
      color="primary"
      size="small"
      style={{ width: 200 }}
      defaultValue={setDefaultValue}
      InputProps={{ inputProps: { min: minValue, max: maxValue } }}
      onChange={setValueOnChange}
      sx={{ backgroundColor: 'background.bgcolor' }}
    />
  );
};

export default BetAmountField;
