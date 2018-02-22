var timeOfDay = ["10 AM: ", "11 AM: ", "12 PM: ", "1 PM: ", "2 PM: ", "3 PM: ", "4 PM: ", "5 PM: ", "6 PM: "];
var getCookiesPerHour = function(minCustomer, maxCustomer, avgCookie) {
    return Math.floor(((Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer) * avgCookie);
}


var Location = function(name, minCustomer, maxCustomer, avgCookie) {
    this.name = name;
    this.minCustomer = 0;
    this.maxCustomer = 0;
    this.avgCookie = 0;
    this.getRandomInt = function() {
        return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
    },
    this.getCookiesPerHour = function () {
        for (var index = 0; index < timeOfDay.length; index++) {
            return Math.floor(this.getRandomInt() * this.avgCookie);
        }
    }
}

var cookieLocations = [];
cookieLocations.push(new Location("Pioneer Square", 5, 88, 5.2));
cookieLocations.push(new Location("Portland Airport (PDX)", 6, 24, 1.2));
cookieLocations.push(new Location("Washington Square Mall", 11, 38, 1.9))


var portlandAirport = new Location("Portland Airport (PDX)", 6, 24, 1.2);
cookieLocations.push(portlandAirport);
portlandAirport.getCookiesPerHour();
//     name: "Portland Airport (PDX)",
//     minCustomer: 6,
//     maxCustomer: 24,
//     avgCookie: 1.2,

//     getRandomInt: function() {
//         return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
//     },
//     getCookiesPerHour: function () {
//         for (var index = 0; index < timeOfDay.length; index++) {
//             return Math.floor(this.getRandomInt() * this.avgCookie);
//         }
//     }
// }

// var washingtonSquare = {
//     name: "Washington Square Mall",
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCookie: 1.9,
//     getRandomInt: function() {
//         return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
//     },
//     getCookiesPerHour: function () {
//         for (var index = 0; index < timeOfDay.length; index++) {
//             return Math.floor(this.getRandomInt() * this.avgCookie);
//         }
//     }
// }

// var sellwood = {
//     name: "SE Sellwood",
//     minCustomer: 20,
//     maxCustomer: 48,
//     avgCookie: 3.3,
//     getRandomInt: function() {
//         return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
//     },
//     getCookiesPerHour: function () {
//         for (var index = 0; index < timeOfDay.length; index++) {
//             return Math.floor(this.getRandomInt() * this.avgCookie);
//         }
//     }
// }

// var pearlDistrict = {
//     name: "Historic Pearl District",
//     minCustomer: 3,
//     maxCustomer: 24,
//     avgCookie: 2.6,
//     cookieResults: [],
//     getRandomInt: function() {
//         return Math.floor(Math.random() * Math.floor(this.maxCustomer - this.minCustomer) + this.minCustomer);
//     },
//     getCookiesPerHour: function () {
//         for (var index = 0; index < timeOfDay.length; index++) {
//             return Math.floor(this.getRandomInt() * this.avgCookie);
//         }
//     }
// }

// var cookieLocations = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];



var locationHTML = "";
// for (var cookieIndex = 0; cookieIndex < cookieLocations.length; cookieIndex++) {
//     locationHTML += "<ul><h3>"+cookieLocations[cookieIndex].name+"</h3>";
//     var cookieTotal = 0;
//     for (var index = 0; index < timeOfDay.length; index++) {
//         locationHTML += "<li>"+timeOfDay[index] + cookieLocations[cookieIndex].getCookiesPerHour()+"</li>";
//         cookieTotal += cookieLocations[cookieIndex].getCookiesPerHour();
//         }
//         locationHTML += "<li>Total: "+cookieTotal+"</li></ul>";
// }



function makeTable() {
    for (var cookieIndex = 0; cookieIndex < cookieLocations.length; cookieIndex++) {
        var table = document.getElementById("location");
        table.innerHTML += "<tr><th>"+cookieLocations[cookieIndex].name+"</tr></th>";
        var cookieTotal = 0;
        for (var index = 0; index < timeOfDay.length; index++) {
            table += "<tr><td>"+timeOfDay[index]+"</td><td>"+cookieLocations[cookieIndex].getCookiesPerHour()+"</td></tr>";
            cookieTotal += cookieLocations[cookieIndex].getCookiesPerHour();
            }
            table += "<tr><td>Total: "+cookieTotal+"</td></tr>";
    }

row = document.getElementById("tr");
cell = document.getElementById("th");
cell.innerText = cookieLocations[cookieIndex].name;
row.appendChild(cell);
cell = document.getElementById("tr");
cell.innerText = timeOfDay[index];
row.appendChild(cell);
cell = document.getElementById("tr");
cell.innerText = cookieLocations[cookieIndex].getCookiesPerHour();
row.appendChild(cell);
table.appendChild(row);
}
makeTable();
// document.getElementById("location").innerHTML = locationHTML;