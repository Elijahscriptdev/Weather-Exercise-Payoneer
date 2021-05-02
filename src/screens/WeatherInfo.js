import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherInfo } from "../redux/actions/weatherInfo";
import Cards from "../components/Cards";
import { Grid } from "@material-ui/core";
import Loading from "./Loading";

const WeatherInfo = () => {
  const weatherInfo = useSelector((state) => state.weatherInfo);
  const { data } = weatherInfo;
  const newInfo = data.list;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherInfo());
  }, []);

  return (
    <div>
      <h1>WeatherInfo</h1>
      <Grid container justify='center' spacing={5}>
        {newInfo ? (
          newInfo.map((info) => (
            <Grid item key={info.dt} xs={12} sm={6} md={4} lg={4}>
              <Cards info={info} />
            </Grid>
          ))
        ) : (
          <Loading />
        )}
      </Grid>
    </div>
  );
};

export default WeatherInfo;
