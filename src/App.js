import { Provider } from "react-redux";
import WeatherInfo from "./screens/WeatherInfo";
import store from './redux/store'
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <WeatherInfo />
    </Provider>
  );
}

export default App;

// import Button from "@material-ui/core/Button";

// import Cards from "./components/Cards";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from '@material-ui/core/styles';

// const classes = useStyles();

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));

// <div className=''>
//   <h1>Weather Exercise - React-JS </h1>
//   <Button variant='contained' color='primary' href='#contained-buttons'>
//     Link
//   </Button>
//   <div className={classes.root}>
//     <Grid container spacing={3}>
//       <Grid item xs={12}>
//         <Cards />
//       </Grid>
//       <Grid item xs={12}>
//         <Cards />
//       </Grid>
//     </Grid>
//   </div>
// </div>
