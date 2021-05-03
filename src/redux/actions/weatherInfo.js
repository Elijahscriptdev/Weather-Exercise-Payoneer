import axios from "axios";
import { WEATHER_INFO_SUCCESS, WEATHER_INFO_FAIL } from "./types";

// LOAD user
export const getWeatherInfo = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40",
      config
    );
    dispatch({
      type: WEATHER_INFO_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: WEATHER_INFO_FAIL,
    });
  }
};
