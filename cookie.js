var timeOfDay = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3PM", "4 PM", "5 PM", "6 PM"];
document.getElementById("times").innerHTML = timeOfDay;
tOD = timeOfDay.length;
text = "<ul>";
for (i = 0; i < tOD; i++) {
    text += "<li>" + timeOfDay[i] + "</li>";
}

var pioneerSquare = {
    location: "Pioneer Square",
    minCustomer: 17,
    maxCustomer: 88,
    avgCookie: 5.2,
    getRandomInt(minCustomer, maxCustomer) {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
      },
    getCookiesPerHour: function() {
        return Math.floor(this.getRandomCustomer() * this.avgCookie);
    }
}


var portlandAirport = {
    location: "Portland Airport (PDX)",
    minCustomer: 6,
    maxCustomer: 24,
    avgCookie: 1.2,
    getRandomInt(minCustomer, maxCustomer) {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
      },
      getCookiesPerHour: function() {
        return Math.floor(this.getRandomCustomer() * this.avgCookie);
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
      getCookiesPerHour: function() {
        return Math.floor(this.getRandomCustomer() * this.avgCookie);
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
    getCookiesPerHour: function() {
        return Math.floor(this.getRandomCustomer() * this.avgCookie);
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
      getCookiesPerHour: function() {
        return Math.floor(this.getRandomCustomer() * this.avgCookie);
    }
}












buildList();

function buildList() {
    locationHTML = "<li>Min / Customer</li><li>Max / Customer</li><li>Avg. / Customer</li></tr>";
    for (var index = 0; index < purchase.length; index++) {
        var currentStudent = purchase[index];
        locationHTML += "<tr><td>" + currentCookie.minCookie + "</td><td>" + currentCookie.maxCookie + "</td><td>" + currentStudent.avgCookie + "</td><tr>";
    }
    document.getElementById("cookieLocations").innerHTML = "locationHTML";
}