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


- React
- React Hooks
- Redux
- Netlify (For deployment)
- Material-Ui
- ES6 JavaScript.

## Deployment to Netlify
[Live link](https://weather-app-react-test.netlify.app/)


## Deployment to heroku

[Live link](https://weather-app-react-test.netlify.app/)

## Images

![homepage](https://res.cloudinary.com/elijjaaahhhh/image/upload/v1620972124/FireShot_Capture_272_-_Weather_Exercise_-_React-JS_-_localhost_n9nyjl.png)

## Prerequisites

- React

## Functionalities

- View clothings
- Add clothings to cart
- Delete items fom cart
- Delete cart
- Goggle authentication signin
- Email signin

## Setup

```sh
git clone https://github.com/Elijahscriptdev/Weather-Exercise-Payoneer.git
```

Navigate to the extracted folder

```sh
cd Weather-Exercise-Payoneer
```

Install dependencies

```sh
yarn
```

Start server with:

```sh
    yarn start
```

Open `http://localhost:3000/` in your browser.

## Author

👤 **Elijah Obominuru**

[Github](https://github.com/Elijahscriptdev) | [Twitter](https://twitter.com/ElijahObominuru) | [LinkedIn](https://www.linkedin.com/in/elijah-obominuru-0b730b143/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is licensed under MIT license - see [LICENSE](/LICENSE) for more details.