const leapYears = function(yearToTest) {
    //let boolLeapYearValue;

    if(yearToTest%100 == 0 && yearToTest%400 == 0){
        return true;
    }else if (yearToTest%4 == 0){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
