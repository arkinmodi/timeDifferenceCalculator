document.getElementById('submit').onclick = function() {
    //Start date and breakdown into individual components
    var start = $("#startDate").val().split("T");  //format of $("#startDate").val(): 2018-07-16 01:01 p.m. --> 2018-07-16T13:01 (type: string)
    var startTime = start[1].split(":");
    var startHour = startTime[0];
    var startMinute = startTime[1];
    var startDate = start[0].split("-");
    var startYear = startDate[0];
    var startMonth = startDate[1];
    var startDay = startDate[2];

    //End date and breakdown into individual components
    var end = $("#endDate").val().split("T");
    var endTime = end[1].split(":");
    var endHour = endTime[0];
    var endMinute = endTime[1];
    var endDate = end[0].split("-");
    var endYear = endDate[0];
    var endMonth = endDate[1];
    var endDay = endDate[2];

    //Calculate Difference
    var diffYear = parseInt(endYear) - parseInt(startYear);  //parseInt() --> converts string into int
    var diffMonth = parseInt(endMonth) - parseInt(startMonth);
    var diffDay = parseInt(endDay) - parseInt(startDay);
    var diffHour = parseInt(endHour) - parseInt(startHour);
    var diffMinute = parseInt(endMinute) - parseInt(startMinute);

    //Accounting for negative time
    if (diffMinute < 0) {
        diffMinute = 60 + diffMinute;
        diffHour = diffHour - 1;
    };

    if (diffHour < 0) {
        diffHour = 24 + diffHour;
        diffDay = diffDay - 1;
    };

    if (diffDay < 0) {
        diffDay = 31 + diffDay;
        diffMonth = diffMonth - 1;
    };

    if (diffMonth < 0) {
        diffMonth = 12 + diffMonth;
        diffYear = diffYear - 1;
    };

    //Checks if the start date occurs before the end date
    if (diffYear < 0 || diffMonth < 0 || diffDay < 0 || diffHour < 0 || diffMinute < 0) {
        document.getElementById("timeDifference").innerHTML = "Please check that the start date occurs before the end date."
    }
    else {
        var timeDifference = "The difference in time is " + diffYear + " years, " + diffMonth + " months, " + diffDay + " days, " + diffHour + " hours, and " + diffMinute + " minutes."
        document.getElementById("timeDifference").innerHTML = timeDifference
    }
}