import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { startOfDay, format } from "date-fns";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  temp: {
    fontSize: 20,
    color: "rgba(27, 141, 141, 0.6)",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 30,
  },
});

const BarChart = ({ temperatureType, weatherInfoList, cardDate }) => {
  const classes = useStyles();
  const [chartData, setChartData] = useState({});

  const filterDates = () => {
    const filteredDates = weatherInfoList && weatherInfoList.filter((weatherDates) => {
      let convertDate = startOfDay(new Date(weatherDates.dt_txt));
      let FormatDate = format(convertDate, "dd 'of' MMMM yyyy");
      return FormatDate === cardDate;
    });
    const filteredTemp = arrayOfAllTempForADay(filteredDates);
    toggleCelcuisFahrenheit(filteredTemp);
  };

  const arrayOfAllTempForADay = (filteredDates) => {
    const mappedTemp = filteredDates && filteredDates.map((temps) => {
      return temps.main.temp;
    });
    return mappedTemp;
  };

  useEffect(() => {
    filterDates();
  }, [cardDate, temperatureType]);

  const toggleCelcuisFahrenheit = (arrayOfAllTempForADay) => {
    let converToCelcuisFahrenheitData = [];
    if (temperatureType === "celsius") {
      arrayOfAllTempForADay &&
        arrayOfAllTempForADay.map((temp) => {
          converToCelcuisFahrenheitData.push(Math.floor(temp + -273.15));
        });
      setChartData({
        labels: converToCelcuisFahrenheitData,
        datasets: [
          {
            label: cardDate
              ? `Temperature Level in celsius - ${cardDate}`
              : "Temperature Level in celsius",
            data: converToCelcuisFahrenheitData,
            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
            borderWidth: 4,
          },
        ],
      });
    } else {
      arrayOfAllTempForADay &&
        arrayOfAllTempForADay.map((temp) => {
          converToCelcuisFahrenheitData.push(Math.floor(((temp - 273.15) * 9) / 5 + 32));
        });
      setChartData({
        labels: converToCelcuisFahrenheitData,
        datasets: [
          {
            label: cardDate
              ? `Temperature Level in fahrenheit - ${cardDate}`
              : "Temperature Level in fahrenheit",
            data: converToCelcuisFahrenheitData,
            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
            borderWidth: 4,
          },
        ],
      });
    }
  };

  return (
    <div>
      <Typography variant='h5' component='h1' className={classes.temp}>
        Barchat representation
      </Typography>
      <Bar
        data={chartData}
        weight={150}
        height={150}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default BarChart;
