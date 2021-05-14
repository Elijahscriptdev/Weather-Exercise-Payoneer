import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherInfo } from "../redux/actions/weatherInfo";
import Cards from "../components/Cards";
import BarChart from "../components/BarChart";
import { Grid } from "@material-ui/core";
import Loading from "./Loading";
import ReactPaginate from "react-paginate";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";
import ToggleTempForm from "../components/ToggleTempForm";
import { getDayOfYear, startOfDay, format } from "date-fns";

const WeatherInfo = () => {
  const weatherInfo = useSelector((state) => state.weatherInfo);
  const { data, loading } = weatherInfo;
  const [countedDayTemperatures, setCountedDayTemperatures] = useState([]);
  const [temperatureType, setTemperatureType] = useState("celsius");
  const dispatch = useDispatch();
  const [weatherInfoList, setWeatherInfoList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [newInfo, setNewInfo] = useState();

  const weatherInfoPerPage = 3;
  const pagesVisited = pageNumber * weatherInfoPerPage;

  useEffect(() => {
    const computedWeatherData =
      weatherInfoList &&
      weatherInfoList.reduce((accumulator, currentValue) => {
        if (!accumulator[getDayOfYear(new Date(currentValue.dt_txt))]) {
          accumulator[getDayOfYear(new Date(currentValue.dt_txt))] = {
            value: 0,
            count: 0,
            date: startOfDay(new Date(currentValue.dt_txt)),
          };
        }
        accumulator[getDayOfYear(new Date(currentValue.dt_txt))].value +=
          currentValue.main.temp;
        accumulator[getDayOfYear(new Date(currentValue.dt_txt))].count += 1;
        return accumulator;
      }, {});

    const averageArray = [];
    for (let day in computedWeatherData) {
      averageArray.push({
        average: Number(
          (
            computedWeatherData[day].value / computedWeatherData[day].count
          ).toFixed(2)
        ),
        date: format(computedWeatherData[day].date, "dd 'of' MMMM yyyy"),
      });
    }
    setCountedDayTemperatures(averageArray);
  }, [weatherInfoList]);

  useEffect(() => {
    setWeatherInfoList(data.list);
  }, [weatherInfo]);

  useEffect(() => {
    dispatch(getWeatherInfo());
  }, []);

  const displayWeatherInfo = countedDayTemperatures
    .slice(pagesVisited, pagesVisited + weatherInfoPerPage)
    .map((info, id) => (
      <Grid item key={id} xs={12} sm={6} md={4} lg={4}>
        <Cards
          temperatureType={temperatureType}
          info={info}
          setNewInfo={setNewInfo}
        />
      </Grid>
    ));

  const pageCount = Math.ceil(
    countedDayTemperatures.length / weatherInfoPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleChange = (event) => {
    if (event.target.value === "celsius") {
      setTemperatureType(event.target.value);
    } else if (event.target.value === "fahrenheit") {
      setTemperatureType(event.target.value);
    }
  };

  return (
    <div>
      <h1>WeatherInfo</h1>
      <ToggleTempForm handleChange={handleChange} />
      <ReactPaginate
        previousLabel={<ImArrowLeft />}
        nextLabel={<ImArrowRight />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      <Grid container justify='center' spacing={5}>
        {loading ? (
          <Loading />
        ) : !loading && !displayWeatherInfo ? (
          <h1>Service Unavailable</h1>
        ) : (
          displayWeatherInfo
        )}
      </Grid>

      <BarChart
        temperatureType={temperatureType}
        weatherInfoList={weatherInfoList}
        newInfo={newInfo}
      />
    </div>
  );
};

export default WeatherInfo;
