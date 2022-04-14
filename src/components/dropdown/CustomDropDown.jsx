import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomDropDown = (props) => {
  const { valueList, setValue, label } = props;

  const handleChange = (event) => {
    console.log(event);
    setValue(event.target.value);
  };

  return (
    <Box sx={{ width: 300 }}>
      <FormControl sx={{ width: 150 }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          id="simple-select-standard"
          label={label}
          onChange={handleChange}
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
