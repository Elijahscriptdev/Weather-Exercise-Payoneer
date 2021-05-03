import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherInfo } from "../redux/actions/weatherInfo";
import Cards from "../components/Cards";
import { Grid } from "@material-ui/core";
import Loading from "./Loading";
import ReactPaginate from "react-paginate";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";
import ToggleTempForm from "../components/ToggleTempForm";

const WeatherInfo = () => {
  const weatherInfo = useSelector((state) => state.weatherInfo);
  const { data, loading } = weatherInfo;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherInfo());
  }, []);

  const weatherInfoList = data.list;
  const [pageNumber, setPageNumber] = useState(0);

  const weatherInfoPerPage = 8;
  const pagesVisited = pageNumber * weatherInfoPerPage;

  const displayWeatherInfo =
    weatherInfoList &&
    weatherInfoList
      .slice(pagesVisited, pagesVisited + weatherInfoPerPage)
      .map((info) => (
        <Grid item key={info.dt} xs={12} sm={6} md={4} lg={4}>
          <Cards info={info} />
        </Grid>
      ));

  const pageCount = Math.ceil(
    weatherInfoList && weatherInfoList.length / weatherInfoPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [selectedValueCelsuis, setSelectedValueCelsuis] = useState(false);
  const [selectedValueFahrenheit, setSelectedValueFahrenheit] = useState(false);

  const handleChange = (event) => {
    // selectedValueCelsuis(event.target.checked);
    // if (radioValue === 'celsius'){
    //   stateProperty = 'celsiusChecked'
    // } else if (radioValue === 'fahrenheit'){
    //   stateProperty = 'fahrenheitChecked'
    // }
  };

  return (
    <div>
      <h1>WeatherInfo</h1>
      <ToggleTempForm
        selectedValueCelsuis={selectedValueCelsuis}
        selectedValueFahrenheit={selectedValueFahrenheit}
        handleChange={handleChange}
      />
      {/* <h1>checkbox is: {selectedValueCelsuis ? "True" : "false"}</h1> */}
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
    </div>
  );
};

export default WeatherInfo;
