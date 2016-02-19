var crime_stats_summary = [
{precinct:"E",crime:"Larceny-Theft",count:3080},{precinct:"E",crime:"Motor Vehicle Theft",count:563},{precinct:"E",crime:"Burglary",count:1036},{precinct:"E",crime:"Robbery",count:292},{precinct:"E",crime:"Assault",count:299},{precinct:"W",crime:"Robbery",count:449},{precinct:"W",crime:"Assault",count:595},{precinct:"W",crime:"Larceny-Theft",count:6460},{precinct:"W",crime:"Motor Vehicle Theft",count:690},{precinct:"W",crime:"Burglary",count:1380},{precinct:"W",crime:"Rape",count:33},{precinct:"SE",crime:"Robbery",count:387},{precinct:"SE",crime:"Assault",count:403},{precinct:"SE",crime:"Larceny-Theft",count:2358},{precinct:"SE",crime:"Motor Vehicle Theft",count:778},{precinct:"SE",crime:"Burglary",count:1249},{precinct:"N",crime:"Assault",count:418},{precinct:"N",crime:"Larceny-Theft",count:6170},{precinct:"N",crime:"Motor Vehicle Theft",count:1707},{precinct:"N",crime:"Burglary",count:2734},{precinct:"N",crime:"Robbery",count:333},{precinct:"N",crime:"Rape",count:28},{precinct:"SW",crime:"Robbery",count:126},{precinct:"SW",crime:"Assault",count:227},{precinct:"SW",crime:"Larceny-Theft",count:1659},{precinct:"SW",crime:"Motor Vehicle Theft",count:479},{precinct:"SW",crime:"Burglary",count:983},{precinct:"SW",crime:"Rape",count:6},{precinct:"E",crime:"Rape",count:16},{precinct:"SE",crime:"Homicide",count:8},{precinct:"SE",crime:"Rape",count:8},{precinct:"E",crime:"Homicide",count:4},{precinct:"N",crime:"Homicide",count:4},{precinct:"W",crime:"Homicide",count:4},{precinct:"SW",crime:"Homicide",count:3}];

function precincts() {
    var tmp = [];
    for (row in crime_stats_summary) {
        if (tmp.indexOf(crime_stats_summary[row].precinct) == -1) {
            tmp.push(crime_stats_summary[row].precinct);
        }
    }
    return tmp;
}

function crimes() {
    var tmp = [];
    for (row in crime_stats_summary) {
        if (tmp.indexOf(crime_stats_summary[row].crime) == -1) {
            tmp.push(crime_stats_summary[row].crime);
        }
    }
    return tmp;
}