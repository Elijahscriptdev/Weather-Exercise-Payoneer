import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Cards = ({ temperatureType, info }) => {
  const classes = useStyles();

  const convertToCelsius = useCallback((temperature) => {
    return `${Math.floor(temperature + -273.15)} °C`;
  }, []);
  
  const convertToFarenheit = useCallback((temperature) => {
    return `${Math.floor(((temperature - 273.15) * 9) / 5 + 32)} °F`;
  }, []);

  const getTemperature = useCallback((temperature) => {
    switch(temperatureType) {
      case 'celsius': {
        return convertToCelsius(temperature)
      }
      case 'fahrenheit': {
        console.log('faren')
        return convertToFarenheit(temperature)
      }
      default: {
        break;
      }
    }
  }, [temperatureType]);

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {info.dt_txt}
        </Typography>
        <Typography variant='h5' component='h2'>
          Temp: {getTemperature(info.main.temp)}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Weather: {info.weather[0].main}
        </Typography>
        <Typography variant='body2' component='p'>
          Weather Description: {info.weather[0].description}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
