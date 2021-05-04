# Weather-Exercise-Payoneer

Since we are programmers and sit inside the whole day we would like to have an app to check the weather outside so we do not  actually have to go outside to see what it's like.  
The WeatherApp contains two screens: 
Loading screen 
Weather info screen 

Loading Screen 
The loading screen is the first screen that is shown and here the weather data will be loaded from OpenWeatherMap at: https:// openweathermap.org/. You can use our OpenWeatherMap APPID to obtain weather information.  The URL provided below returns weather info for a total of 5 days and each day contains a  maximum of 8 weather segments (3 hours). 
Example request with our APPID: 
http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40 

Weather Info Screen 
After the weather data has been loaded the weather info screen is made visible. This screen is capable of showing a minimum of  5 days of weather forecasts for the same location. 
Temperature checkbox 
The screen contains a CheckboxGroup that switches between Celsius and Fahrenheit (Default). When the user selects i.e.  Celsius, all temperatures in the cards (BarChart) must switch to Celsius. 
Card Arrows 
Below the Checkboxes, there are two arrows to scroll through the weather cards (pageSize == 3) 
The left arrow is only visible when the current pageIndex is > 0. 
The right arrow is only visible when there is an item at pageIndex + pageSize. 
Weather Cards 
Below the arrows, a maximum of 3 weather cards are visible and they are laid out horizontally. Each card displays the weather  forecast for one day and must at least show the average temperature and date for that day.



## Built With

- React Hooks

## Deployment to Netlify
[Live link](https://goofy-babbage-4ba74e.netlify.app/)


## Setup

```sh
$ git clone https://github.com/Elijahscriptdev/Weather-Exercise-Payoneer.git

### cd into the project

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Author

👤 **Elijah Obominuru**

[Github](https://github.com/Elijahscriptdev) | [Twitter](https://twitter.com/ElijahObominuru) | [LinkedIn](https://www.linkedin.com/in/elijah-obominuru-0b730b143/)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!


## 📝 License

This project is licensed under MIT license - see [LICENSE](/LICENSE) for more details.
