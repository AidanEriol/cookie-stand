var timeOfDay = ["10 AM: ", "11 AM: ", "12 PM: ", "1 PM: ", "2 PM: ", "3 PM: ", "4 PM: ", "5 PM: ", "6 PM: "];
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

function makeTable() {        
    var table = document.getElementById("location").firstElementChild;
    for (var cookieIndex = 0; cookieIndex < cookieLocations.length; cookieIndex++) {
        table.innerHTML += "<tr><th>"+cookieLocations[cookieIndex].name+"</tr></th>";
        var cookieTotal = 0;
        for (var index = 0; index < timeOfDay.length; index++) {
            var cookieResults = cookieLocations[cookieIndex].getCookiesPerHour();
            table.innerHTML += "<tr><td>"+timeOfDay[index]+"</td><td>"+cookieResults+"</td></tr>";
            cookieTotal += cookieResults;
            }
            table.innerHTML += "<tr><td>Total: "+cookieTotal+"</td></tr>";
    }
}

function addCookieLocation() {

}

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

function validateForm(form) {
    var formIsValid = true;
    for (var index = 0; index < form.elements.length; index++) {
        if (form.elements(index).value == "") {
            formIsValid = false;
            console.log(form.elements(index).name + " has no value.")
        }
    }
    if (!formIsValid) {
        alert("All fields are required");
        return false;
        // won't let the form be submitted
    }
    return true;
}




makeTable();