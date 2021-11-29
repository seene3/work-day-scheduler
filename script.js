//find current time and date
//if time is in the past make it so its know that time has passed
//be able to click time slot to create event
//save event in time slot so on refresh it stays
var currentDate = moment().format('ddd') + " " + moment().format("Do MMM YY")
var hour = moment().hour();

var nine = document.getElementById("#9am");
var ten = document.getElementById("#10am");
var eleven = document.getElementById("#11am");
var twelve = document.getElementById("#12pm");
var one = document.getElementById("#1pm");
var two = document.getElementById("#2pm");
var three = document.getElementById("#3pm");
var four = document.getElementById("#4pm");
var five = document.getElementById("#5pm");

console.log("the time is:", hour)
console.log(currentDate)

var date = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('MMMM Do, YYYY'))
})

function color() {

    $(".form-control").each(function () {
        var time = parseInt($(this).attr("id"))
        hour = parseInt(hour)
        if (hour > time) {
            $(this).addClass("past")
        }
        else if (hour === time) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }
    })
}

color();