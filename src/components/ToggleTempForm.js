import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const ToggleTempForm = ({ handleChange }) => {
  return (
    <FormControl component='fieldset'>
      <RadioGroup
        row
        aria-label='position'
        name='position'
        defaultValue='top'
        m={5}
      >
        <FormControlLabel
          value='celsius'
          control={<Radio color='primary' />}
          label='Celcius'
          labelPlacement='start'
          className='radio'
          onChange={handleChange}
        />
        <FormControlLabel
          value='fahrenheit'
          control={<Radio color='primary' />}
          label='fahrenheit'
          className='radio'
          onChange={handleChange}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default ToggleTempForm;
