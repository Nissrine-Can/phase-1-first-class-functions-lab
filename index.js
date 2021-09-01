const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(2);
}

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 function createFareMultiplier(num) {
   return function(fareForARide) {
     return num * fareForARide;
   }
 }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnDrivers) {
   return returnDrivers(drivers)
}


