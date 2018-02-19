var timeOfDay = ["10 AM: ", "11 AM: ", "12 PM: ", "1 PM: ", "2 PM: ", "3 PM: ", "4 PM: ", "5 PM: ", "6 PM: "];
var getCookiesPerHour = function(minCustomer, maxCustomer, avgCookie) {
    return Math.floor(((Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer) * avgCookie);
}


var pioneerSquare = {
    name: "Pioneer Square",
    minCustomer: 17,
    maxCustomer: 88,
    avgCookie: 5.2,
    getRandomInt: function() {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var index = 0; index < timeOfDay.length; index++) {
            return Math.floor(this.getRandomInt() * this.avgCookie);
        }
    },
    calculateTotal: function() {
        var total = 0;
        for (var index = 0; index < cookieLocations.length; index++) {
            total = timeOfDay.total + parseInt(cookieLocations[index].getCookiesPerHour())
        }
    }
}


var portlandAirport = {
    name: "Portland Airport (PDX)",
    minCustomer: 6,
    maxCustomer: 24,
    avgCookie: 1.2,
    getRandomInt: function() {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var index = 0; index < timeOfDay.length; index++) {
            return Math.floor(this.getRandomInt() * this.avgCookie);
        }
    }
}

var washingtonSquare = {
    name: "Washington Square Mall",
    minCustomer: 11,
    maxCustomer: 38,
    avgCookie: 1.9,
    getRandomInt: function() {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var index = 0; index < timeOfDay.length; index++) {
            return Math.floor(this.getRandomInt() * this.avgCookie);
        }
    }
}

var sellwood = {
    name: "SE Sellwood",
    minCustomer: 20,
    maxCustomer: 48,
    avgCookie: 3.3,
    getRandomInt: function() {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    getCookiesPerHour: function () {
        for (var index = 0; index < timeOfDay.length; index++) {
            return Math.floor(this.getRandomInt() * this.avgCookie);
        }
    }
}

var pearlDistrict = {
    name: "Historic Pearl District",
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
    }
}

var cookieLocations = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];



var locationHTML = "";
for (var cookieIndex = 0; cookieIndex < cookieLocations.length; cookieIndex++) {
    locationHTML += "<tr><th>"+cookieLocations[cookieIndex].name+"</th></tr>";
    var cookieTotal = 0;
    for (var index = 0; index < timeOfDay.length; index++) {
        locationHTML += "<tr><td>"+timeOfDay[index]+"</tr></td><tr><td>"+cookieLocations[cookieIndex].getCookiesPerHour()+"</tr></td>";
        cookieTotal += cookieLocations[cookieIndex].getCookiesPerHour();
        }
        locationHTML += "<tr><td>Total: "+cookieTotal+"</tr></td>";
}

document.getElementById("location").innerHTML = locationHTML;