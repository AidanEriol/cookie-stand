var timeOfDay = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3PM", "4 PM", "5 PM", "6 PM"];
document.getElementById("times").innerHTML = timeOfDay;
tOD = timeOfDay.length;
var text = "<ul>";
for (i = 0; i < tOD; i++) {
    text += "<li>" + timeOfDay[i] + "</li>";
}

// cookieHTML = "<tr><th>Pioneer Square Mall</th><th>Minimum Customer / Hour</th><th>Maximum Customer / Hour</th><th>Average Cookies / Customer</th>";
// for (var index = 0; index < timeOfDay.length; index++) {
//     var currentLocation = timeOfDay[index];
//     cookieHTML += "<tr><td>"+currentLocation.minCustomer+"</td><td>"+currentLocation.maxCustomer+"</td><td>"+currentLocation.avgCookie+"</td></tr>";
// }
// document.getElementById("pioneer").innerHTML = "cookieHTML";




var pioneerSquare = {
    location: "Pioneer Square",
    minCustomer: 17,
    maxCustomer: 88,
    avgCookie: 5.2,
    getRandomInt(minCustomer, maxCustomer) {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var i = 0; i < timeOfDay.length; i++)
        this.cookieResults.push(
        Math.floor(this.getRandomCustomer() * this.avgCookie)
        );
    }
}
cookieResults: [];



var portlandAirport = {
    location: "Portland Airport (PDX)",
    minCustomer: 6,
    maxCustomer: 24,
    avgCookie: 1.2,
    getRandomInt(minCustomer, maxCustomer) {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var i = 0; i < timeOfDay.length; i++)
        this.cookieResults.push(
        Math.floor(this.getRandomCustomer() * this.avgCookie)
        );
    }
}

var washingtonSquare = {
    location: "Washington Square Mall",
    minCustomer: 11,
    maxCustomer: 38,
    avg: 1.9,
    getRandomInt(minCustomer, maxCustomer) {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var i = 0; i < timeOfDay.length; i++)
        this.cookieResults.push(
        Math.floor(this.getRandomCustomer() * this.avgCookie)
        );
    }
}

var sellwood = {
    location: "SE Sellwood",
    minCustomer: 20,
    maxCustomer: 48,
    avgCookie: 3.3,
    getRandomInt(minCustomer, maxCustomer) {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var i = 0; i < timeOfDay.length; i++)
        this.cookieResults.push(
        Math.floor(this.getRandomCustomer() * this.avgCookie)
        );
    }
}

var pearlDistrict = {
    location: "Historic Pearl District",
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 2.6,
    getRandomInt(minCustomer, maxCustomer) {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var i = 0; i < timeOfDay.length; i++)
        this.cookieResults.push(
        Math.floor(this.getRandomCustomer() * this.avgCookie)
        );
    }
}
var cookieLocations = [];
cookieLocations.push({ name: "Pioneer Square Mall", minCustomer: 17, maxCustomer: 88, avgCookie: 5.2, });
cookieLocations.push({ name: "Portland Airport (PDX)", minCustomer: 6, maxCustomer: 24, avgCookie: 1.2 });
cookieLocations.push({ name: "Washington Square Mall", minCustomer: 11, maxCustomer: 38, avgCookie: 1.9 });
cookieLocations.push({ name: "SE Sellwood", minCustomer: 20, maxCustomer: 48, avgCookie: 3.3 });
cookieLocations.push({ name: "Historic Pearl District", minCustomer: 3, maxCustomer: 24, avgCookie: 2.6 });

cookieHTML = "<tr><th>Minimum Customer / Hour</th><th>Maximum Customer / Hour</th><th>Average Cookies / Customer</th>";
for (var index = 0; index < cookieLocations.length; index++) {
    var currentLocation = cookieLocations[index];
    cookieHTML += "<tr><td>" + currentLocation.minCustomer + "</td><td>" + currentLocation.maxCustomer + "</td><td>" + currentLocation.avgCookie + "</td></tr>";
}
document.getElementById("locations").innerHTML = cookieHTML;









// buildList();

// function buildList() {
//     locationHTML = "<li>Min / Customer</li><li>Max / Customer</li><li>Avg. / Customer</li></tr>";
//     for (var index = 0; index < purchase.length; index++) {
//         var currentStudent = purchase[index];
//         locationHTML += "<tr><td>" + currentCookie.minCookie + "</td><td>" + currentCookie.maxCookie + "</td><td>" + currentStudent.avgCookie + "</td><tr>";
//     }
//     document.getElementById("cookieLocations").innerHTML = "locationHTML";
// }