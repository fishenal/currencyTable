import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function SettingForm() {
  const classes = useStyles();

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event", event)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event)
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">123</FormLabel>
          <RadioGroup aria-label="quiz" name="quiz" value="best" onChange={handleRadioChange}>
            <FormControlLabel value="best" control={<Radio />} label="The best!" />
            <FormControlLabel value="worst" control={<Radio />} label="The worst." />
          </RadioGroup>
          <FormHelperText>ddd</FormHelperText>
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Check Answer
          </Button>
        </FormControl>
      </form>
    </Paper>
  )
}
