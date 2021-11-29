//find current time and date
//if time is in the past make it so its know that time has passed
//be able to click time slot to create event
//save event in time slot so on refresh it stays
var currentDate = moment().format('ddd') + " " + moment().format("Do MMM YY")
var hour = moment().hour();

var nine = $("#9am");
var ten = $("#10am");
var eleven = $("#11am");
var twelve = $("#12pm");
var one = $("#1pm");
var two = $("#2pm");
var three = $("#3pm");
var four = $("#4pm");
var five = $("#5pm");

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

function storage() {
    console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("09:00am"));
    nine.val(init9);
  
    var init10 = JSON.parse(localStorage.getItem("10:00am"))
    ten.val(init10);
    
    var init11 = JSON.parse(localStorage.getItem("11:00am"))
    eleven.val(init11);
    
    var init12 = JSON.parse(localStorage.getItem("12:00pm"))
    twelve.val(init12);
    
    var init1 = JSON.parse(localStorage.getItem("01:00pm"))
    one.val(init1);
    
    var init2 = JSON.parse(localStorage.getItem("02:00pm"))
    two.val(init2);
    
    var init3 = JSON.parse(localStorage.getItem("03:00pm"))
    three.val(init3);
   
    var init4 = JSON.parse(localStorage.getItem("04:00pm"))
    four.val(init4);
    
    var init5 = JSON.parse(localStorage.getItem("05:00pm"))
    five.val(init5);
} 

$(".saveBtn").on("click", function() {
    userInput = $(this).siblings(".form-control").val();
    hourSpan = $(this).siblings(".input-group-prepend").text();
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

})

storage();
color();