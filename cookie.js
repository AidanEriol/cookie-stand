// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * Math.floor(max - min) + min);
//   }

var pioneerSquare = {
    location: "Pioneer Square",
    minCustomer: 17,
    maxCustomer: 88,
    avgCookie: 5.2,
    getRandomInt(minCustomer, maxCustomer) {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
      }
}


var portlandAirport = {
    location: "Portland Airport (PDX)",
    minCustomer: 6,
    maxCustomer: 24,
    avgCookie: 1.2,
    getRandomInt(minCustomer, maxCustomer) {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
      }
}

var washingtonSquare = {
    location: "Washington Square Mall",
    minCustomer: 11,
    maxCustomer: 38,
    avg: 1.9,
    getRandomInt(minCustomer, maxCustomer) {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
      }
}

var sellwood = {
    location: "SE Sellwood",
    minCustomer: 20,
    maxCustomer: 48,
    avgCookie: 3.3,
    getRandomInt(minCustomer, maxCustomer) {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
      }
    getCookiesPerHour()
}

var pearlDistrict = {
    location: "Historic Pearl District",
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 2.6,
    getRandomInt(minCustomer, maxCustomer) {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
      }
    // getRandomInt(minCustomer, maxCustomer) => {
    //     return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    // }
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