import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const ToggleTempForm = ({selectedValueCelsuis,  selectedValueFahrenheit, handleChange}) => {
//   const [selectedValue, setSelectedValue] = useState(false);

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

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
          value='start'
          control={<Radio color='primary' />}
          label='Celcius'
          labelPlacement='start'
          className='radio'
        //   checked={selectedValueCelsuis}
        //   onChange={handleChange}
        />
        <FormControlLabel
          value='end'
          control={<Radio color='primary' />}
          label='fahrenheit'
          className='radio'
        //   checked={selectedValueFahrenheit}
        //   onChange={handleChange}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default ToggleTempForm;
