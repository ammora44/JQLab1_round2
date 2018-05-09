"use strict";
  
  $(document).ready(() => {

let selectedTable;

// GENERAL FORM INFO

  $(".table").click(() => {              // FORM POPS UP WHEN
    $(".popup").fadeIn(750);                  // ANY BUTTON/TABLE IS CLICKED 
  });

  $(".table").hover(function(event) {
    $(event.target).addClass("table hover")
  })

// CLICKING OUT OF FORM

  $("#trash").click(() => {               // WHEN YOU CLICK ON X
    $(".popup").fadeOut(750);                   // FORM DISAPEARS
  });  

 // HIDING THE TABLE

 $(".table").hover(function(event) {          // ADDS HOVER FUNCTION ON
  $(event.target).addClass("table hover")   // AVAILABLE TABLES
})

// HITTING THE SAVE BUTTON

$("#save").click(() => {               // SAVE BUTTON THAT IS CLICKED 
  $(".popup").fadeOut(750);                // HIDES FORM
  
  console.log(selectedTable);
  selectedTable.addClass("reserved");
  let partyName = $("#name").val();        // value of name input
  let partySize = $("#size").val();       // value of size input
  console.log(partyName, partySize);
  selectedTable.parent().append("<p class='hidden'>'${partyName} ${partySize}</p>");
});

// RESERVED TABLE ACTIONS

 $(".table").click((event) => {                      // TABLES ARE ACCESSED & COLORED 
  
    selectedTable = $(event.target);
    $("#table-num").text($(event.target).val())
   
 })








});







