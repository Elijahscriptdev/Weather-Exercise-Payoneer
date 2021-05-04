// const getMappedDates = (date) => {
//     const formattedDates = moment(new Date(date.dt_txt)).format("YYYY-MM-DD")
//   }

// weatherInfoList &&
// weatherInfoList.map((date) => {
//   return moment(new Date(date.dt_txt)).format("YYYY-MM-DD");
// });
// const getMappedDates = (date) => {
//   const formattedDates = moment(new Date(date.dt_txt)).format("YYYY-MM-DD")
// }

// const filterTest =
//   tests &&
//   tests.filter((filteredDate) => {
//     if (filteredDate === tests) {
//       return filteredDate;
//     }
//   });

// export default filterDate;


  // if (weatherInfoList) {
  //   console.log("one", new Date(weatherInfoList[0].dt_txt));
  //   // console.log(
  //   //   "two",
  //   //   moment(new Date(weatherInfoList[0].dt_txt).startOf('day'))
  //   // );
  //   console.log(
  //     "three",
  //     moment(new Date(weatherInfoList[0].dt_txt)).format("YYYY-MM-DD")
  //   );
  // }


// // create array to hold unique dates
// const uniqueDates = [];

// // map through all dates to get the unique dates
// function getUniqueDates(weatherInfoList){
//   weatherInfoList.map(weather => {
//     const formattedDate = moment(new Date(weather.dt_txt)).format('YYYY-MM-DD')

//     // check if formattedDate is in array
//     const isDateInArray = uniqueDates.find(date => date === formattedDate )

//     // if date is not in array, push to array
//     if (!isDateInArray){
//       uniqueDates.push(formattedDate)
//     }
    
//   })
// }

// // calculate the average temperature
// const averageTempDateObjects = [];


// function createAvgTempObject (weatherInfoList){
//   uniqueDates.map(uniqueDate => {
//     // check if the uniqueDate matches the date from the API
//     weatherInfoList.map(date =>{
//       if(uniqueDate === moment(new Date(date.dt_txt)).format('YYYY-MM-DD') ){
//         // create new objects with the date and temp for that date
//         averageTempDateObjects.push({
//           date: uniqueDate,
//           temp: date.main.temp,
//         })
//       }
//     })
//   })
// }

// function calculatesAvgDailyTemp(tempsForDay){
//   const totalTemp = tempsForDay.reduce((total, avgTemp)=> total + avgTemp)

//   // calculate the average temperature for the day
//   const avgTemp = totalTemp/tempsForDay.length

//   return avgTemp;
// }


// filter and the averages
