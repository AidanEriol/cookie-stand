"Use strict";

var timeOfDay = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"];

var table = document.getElementById("location").firstElementChild;

var getCookiesPerHour = function(minCustomer, maxCustomer, avgCookie) {
    return Math.floor(((Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer) * avgCookie);
}

var Location = function(name, minCustomer, maxCustomer, avgCookie) {
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookie = avgCookie;
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
cookieLocations.push(new Location("Pioneer Square", 17, 88, 5.2));
cookieLocations.push(new Location("Portland Airport (PDX)", 6, 24, 1.2));
cookieLocations.push(new Location("Washington Square Mall", 11, 38, 1.9));
cookieLocations.push(new Location("SE Sellwood", 20, 48, 3.3));
cookieLocations.push(new Location("Historic Pearl District", 3, 24, 2.6));

function makeHourHeader() {
    var rowTime = document.createElement("tr");
    table.appendChild(rowTime);
    var cellLocation = document.createElement("td");
    cellLocation.textContent = "";
    rowTime.appendChild(cellLocation);
    var cellTotal = document.createElement("td");


    for (var timeIndex = 0; timeIndex < timeOfDay.length; timeIndex++) {
        var cell = document.createElement("td");
        cell.textContent = timeOfDay[timeIndex];
        rowTime.appendChild(cell);
        }
    cellTotal.textContent = "Total";
    rowTime.appendChild(cellTotal);
}

function makeTable() { 
    table.textContent = "";
    makeHourHeader();
    for (var cookieIndex = 0; cookieIndex < cookieLocations.length; cookieIndex++) {
        var store = cookieLocations[cookieIndex]
        var storeRow = document.createElement("tr");
        var cell = document.createElement("td");
        cell.textContent = store.name;
        storeRow.appendChild(cell);
        table.appendChild(storeRow);

        var cookieTotal = 0;
        for (var index = 0; index < timeOfDay.length; index++) {
            var cell = document.createElement("td");
            var cookieResults = store.getCookiesPerHour();
            cell.textContent = cookieResults;
            storeRow.appendChild(cell);
            cookieTotal += cookieResults;
        }
        var cellTotal = document.createElement("td");
        cellTotal.textContent = cookieTotal;
        storeRow.appendChild(cellTotal);
    }
}

function addCookieLocation() {
    var name = form.name.value;
    var minCustomer = form.minCustomer.value;
    var maxCustomer = form.maxCustomer.value;
    var avgCookie = form.avgCookie.value;
    cookieLocations.push(new Location(name, minCustomer, maxCustomer, avgCookie));
    makeTable();
}

makeTable();

function showAddStore() {
    var addStore = document.getElementById("add-store");
    if (addStore.style.display === "block") {
        addStore.style.display = "none";
    } else {
        addStore.style.display = "block";
    }
}

function isValidEntry(inputField) {
    if (inputField.value == "") {
        // if input is empty,
       inputField.setAttribute("class", "required");
    } else {
        inputField.setAttribute("class", "");
        // makes it so that it changes back to clear when a value is set
    }
}