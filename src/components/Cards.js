import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    cursor: "pointer",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  temp: {
    fontSize: 40,
    color: "rgba(27, 141, 141, 0.6)",
    fontWeight: "bolder",
  },
  pos: {
    marginBottom: 12,
  },
});

const Cards = ({ temperatureType, info, setNewInfo }) => {
  const classes = useStyles();

  const convertToCelsius = useCallback((temperature) => {
    return `${Math.floor(temperature + -273.15)} °C`;
  }, []);

  const convertToFahrenheit = useCallback((temperature) => {
    return `${Math.floor(((temperature - 273.15) * 9) / 5 + 32)} °F`;
  }, []);

  const getTemperature = useCallback(
    (temperature) => {
      switch (temperatureType) {
        case "celsius": {
          return convertToCelsius(temperature);
        }
        case "fahrenheit": {
          return convertToFahrenheit(temperature);
        }
        default: {
          break;
        }
      }
    },
    [temperatureType, convertToFahrenheit, convertToCelsius]
  );

  const HandleClick = (e) => {
    e.preventDefault();
    setNewInfo(info.date);
  };

  return (
    <Card className={classes.root} variant='outlined' onClick={HandleClick}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          {info.date}
        </Typography>
        <Typography variant='h5' component='h2' className={classes.temp}>
          Temp: {getTemperature(info.average)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
