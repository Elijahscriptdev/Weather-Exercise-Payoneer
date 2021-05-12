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
