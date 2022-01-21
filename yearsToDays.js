
function yearsToDay(year){
  const daysInYears = 365;

  if(isNaN(year) || year < 0){
    return 0;
  }

  return daysInYears * year
}

module.exports = yearsToDay
