"use strict";
  
  $(document).ready(() => {

// GENERAL FORM INFO

  $(".table").click(() => {              // FORM POPS UP WHEN
    $(".popup").show();                   // ANY BUTTON/TABLE IS CLICKED 
  });
  $(".table").hover(function(event) {
    $(event.target).addClass("table hover")
 })

// CLICKING OUT OF FORM

  $("#trash").click(() => {               // WHEN YOU CLICK ON X
    $(".popup").hide();                   // FORM DISAPEARS
  });  


 // HIDING THE TABLE

 $(".table").hover(function(event) {          // ADDS HOVER FUNCTION ON
  $(event.target).addClass("table hover")   // AVAILABLE TABLES
})

// HITTING THE SAVE BUTTON

$("#save").click(() => {               // SAVE BUTTON THAT IS CLICKED 
  $(".popup").hide(); // HIDES FORM
  let tables = $(".table");
  let formNumberText = $("#table-num").text();
  let tableText = $(".table").val();

});

// RESERVED TABLE ACTIONS

 $(".table").click((event) => {                      // TABLES ARE ACCESSED & COLORED 
    $(event.target).removeClass(".table");      // INDIVIDUALLY W/A CLICK
    $("#table-num").text($(event.target).val())
    $(event.target).removeClass("table hover");
    
 })

});







