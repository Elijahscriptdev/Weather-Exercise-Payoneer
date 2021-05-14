import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { startOfDay, format } from "date-fns";

const BarChart = ({ temperatureType, weatherInfoList, newInfo }) => {
  const [chartData, setChartData] = useState({});

  const filterDates = () => {
    const testData = weatherInfoList.filter((weatherDates) => {
      let pre = startOfDay(new Date(weatherDates.dt_txt));
      let cious = format(pre, "dd 'of' MMMM yyyy");
      return cious === newInfo;
    });
    const testDataTwo = mapTemps(testData);
    formatMapTemps(testDataTwo);
  };

  const mapTemps = (testData) => {
    const testDatathree = testData.map((temps) => {
      return temps.main.temp;
    });
    return testDatathree;
  };

  useEffect(() => {
    filterDates();
  }, [newInfo, temperatureType]);

  const formatMapTemps = (mapTemps) => {
    let celciusData = [];
    if (temperatureType === "celsius") {
      mapTemps &&
        mapTemps.map((temp) => {
          celciusData.push(Math.floor(temp + -273.15));
        });
      setChartData({
        labels: celciusData,
        datasets: [
          {
            label: "Temperature Level in celsius",
            data: celciusData,
            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
            borderWidth: 4,
          },
        ],
      });
    } else {
      mapTemps &&
        mapTemps.map((temp) => {
          celciusData.push(Math.floor(((temp - 273.15) * 9) / 5 + 32));
        });
      setChartData({
        labels: celciusData,
        datasets: [
          {
            label: "Temperature Level in fahrenheit",
            data: celciusData,
            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
            borderWidth: 4,
          },
        ],
      });
    }
  };

  return (
    <div>
      <h1>BAR CHART</h1>
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
