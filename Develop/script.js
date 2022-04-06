//Select ovariables
var jumbotron = $(".jumbotron");
var currentDay = $("#currentDay");
var currentDate = moment().format("dddd, MMMM Do YYYY");

// Show current day and date on header
currentDay.text(currentDate);

//Matching past, present, and future to each hour
$(".description").each(function () {
  var now = moment().hour();
  var currentHour = $(this).parent().attr("id");
  if (parseInt(currentHour) === now) {
    $(this).addClass("present");
  } else if (parseInt(currentHour) < now) {
    $(this).addClass("past");
  } else {
    $(this).addClass("future");
  }
});

//Save tasks to each matching hour
$(".saveBtn").on("click", function () {
  var time = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();
  localStorage.setItem(time, text);
});

//Get saved hours from localstorage for each hour
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
