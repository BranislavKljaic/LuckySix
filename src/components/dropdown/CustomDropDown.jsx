import React from 'react';
import { createTheme } from '@mui/system';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const theme = createTheme({
  palette: {
    background: {
      bgcolor: 'rgb(94, 73, 255)',
    },
  },
});

const CustomDropDown = (props) => {
  const { valueList, setValue, label } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ width: 150 }}>
      <FormControl
        theme={theme}
        sx={{ width: 150, bgcolor: 'background.bgcolor' }}
      >
        <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>
          {label}
        </InputLabel>
        <Select
          id="simple-select-standard"
          label={label}
          variant="standard"
          onChange={handleChange}
          sx={{ color: 'white' }}
        >
          {valueList.map((valueItem) => (
            <MenuItem value={valueItem}>{valueItem}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomDropDown;
