const leapYears = function(yearToTest) {
    //if(yearToTest%100 == 0 && yearToTest%400 == 0){
    //    return true;
    
    if(yearToTest%100 == 0){
        if(yearToTest%400 == 0){
            return true;
        }else{
            return false;
        }
    
    }else if (yearToTest%4 == 0){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
