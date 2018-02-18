// tod array for listing, times unnecessary
var timeOfDay = ["10 AM: ", "11 AM: ", "12 PM: ", "1 PM: ", "2 PM: ", "3PM: ", "4 PM: ", "5 PM: ", "6 PM: "];
document.getElementById("times").innerHTML = timeOfDay;

cookieResults = [];
var pioneerSquare = {
    location: "Pioneer Square",
    minCustomer: 17,
    maxCustomer: 88,
    avgCookie: 5.2,
    cookieResults: [],
    getRandomInt() {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var index = 0; index < timeOfDay.length; index++)
        this.cookieResults.push(
        Math.floor(this.getRandomInt() * this.avgCookie)
        );
    }
}


var portlandAirport = {
    location: "Portland Airport (PDX)",
    minCustomer: 6,
    maxCustomer: 24,
    avgCookie: 1.2,
    getRandomInt() {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var index = 0; index < timeOfDay.length; index++)
        cookieResults.push(
        Math.floor(this.getRandomInt() * this.avgCookie)
        );
    }
}

var washingtonSquare = {
    location: "Washington Square Mall",
    minCustomer: 11,
    maxCustomer: 38,
    avg: 1.9,
    getRandomInt() {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var index = 0; index < timeOfDay.length; index++)
        cookieResults.push(
        Math.floor(this.getRandomInt() * this.avgCookie)
        );
    }
}

var sellwood = {
    location: "SE Sellwood",
    minCustomer: 20,
    maxCustomer: 48,
    avgCookie: 3.3,
    getRandomInt() {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var index = 0; index < timeOfDay.length; index++)
        this.cookieResults.push(
        Math.floor(this.getRandomInt() * this.avgCookie)
        );
    }
}

var pearlDistrict = {
    location: "Historic Pearl District",
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 2.6,
    cookieResults: [],
    getRandomInt: function() {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var index = 0; index < timeOfDay.length; index++) {
            return Math.floor(this.getRandomInt() * this.avgCookie);
        }
        this.cookieResults.push();
    }
}

// cookie shop locations in an array to get pushed
var cookieLocations = [];
cookieLocations.push(pioneerSquare);
cookieLocations.push(portlandAirport);
cookieLocations.push(washingtonSquare);
cookieLocations.push(sellwood);
cookieLocations.push(pearlDistrict);

// cookieHTML = "<tr><th>Minimum Customer / Hour</th><th>Maximum Customer / Hour</th><th>Average Cookies / Customer</th>";
// for (var index = 0; index < cookieLocations.length; index++) {
//     var currentLocation = cookieLocations[index];
//     cookieHTML += "<tr><td>" + currentLocation.minCustomer + "</td><td>" + currentLocation.maxCustomer + "</td><td>" + currentLocation.avgCookie + "</td></tr>";
// }
// document.getElementById("locations").innerHTML = cookieHTML;


function buildTable() {
locationHTML = "<tr><th>"+cookieLocations[index]+"</th></tr>";
for (index = 0; index < timeOfDay.length; index++) {
    var currentLocation = cookieLocations[index];
    locationHTML += "<tr><td>"+timeOfDay[index]+"</tr></td><tr><td>"+currentLocation.pioneerSquare+"</tr></td>";
    }
document.getElementById("pioneer").innerHTML = "locationHTML";
}

// pdxHTML = "<tr><th>Portland Airport (PDX)</th></tr>";
// for (index = 0; index < timeOfDay.length; index++) {
//     pdxHTML += "<tr><td>"+timeOfDay[index]+"</tr></td>";
//     }
// document.getElementById("pdx").innerHTML = pdxHTML;