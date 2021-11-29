//find current time and date
//if time is in the past make it so its know that time has passed
//be able to click time slot to create event
//save event in time slot so on refresh it stays
var currentDate = moment().format('ddd') + " " + moment().format("Do MMM YY")
var hour = moment().hour();

var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twelve = $("#12");
var one = $("#13");
var two = $("#14");
var three = $("#15");
var four = $("#16");
var five = $("#17");

var userInput;
var hours;

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

function storage() {
    var store9 = JSON.parse(localStorage.getItem("9:00am"))
    var store10 = JSON.parse(localStorage.getItem("10:00am"))
    var store11 = JSON.parse(localStorage.getItem("11:00am"))
    var store12 = JSON.parse(localStorage.getItem("12:00pm"))
    var store1 = JSON.parse(localStorage.getItem("1:00pm"))
    var store2 = JSON.parse(localStorage.getItem("2:00pm"))
    var store3 = JSON.parse(localStorage.getItem("3:00pm"))
    var store4 = JSON.parse(localStorage.getItem("4:00pm"))
    var store5 = JSON.parse(localStorage.getItem("5:00pm"))

    nine.val(store9);
    ten.val(store10);
    eleven.val(store11);
    twelve.val(store12);
    one.val(store1);
    two.val(store2);
    three.val(store3);
    four.val(store4);
    five.val(store5);
} 

$(document).ready(function(){
$(".saveBtn").on("click", function() {
    userInput = $(this).siblings(".form-control").val().trim();
    hours = $(this).siblings(".input-group-prepend").text().trim();
    localStorage.setItem(hours, JSON.stringify(userInput));
})

storage();
color();
})