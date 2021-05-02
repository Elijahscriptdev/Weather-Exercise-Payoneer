import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherInfo } from "../redux/actions/weatherInfo";

const WeatherInfo = () => {
  const weatherInfo = useSelector((state) => state.weatherInfo);
  const { data, loading } = weatherInfo;
  const dispatch = useDispatch();
  console.log("data", data)

  useEffect(() => {
    dispatch(getWeatherInfo());
  }, []);

  const HandleClick = () => {
    dispatch(getWeatherInfo());
  };

  return (
    <div>
      <h1>WeatherInfo</h1>
      <button onClick={HandleClick}>Get Weather</button>
    </div>
  );
};

export default WeatherInfo;
