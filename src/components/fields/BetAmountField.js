import React from 'react';

import TextField from '@mui/material/TextField';

export default function BetAmountField(props) {
  return (
    <TextField
      id="standard-number"
      label="Bet"
      type="number"
      variant="standard"
      color="primary"
      size="small"
      style={{ width: 200 }}
      defaultValue="1"
      InputProps={{ inputProps: { min: 1, max: 10 } }}
      onChange={(e) => {
        props.setBet(e.target.value);
      }}
    />
  );
}
