"use strict";
  
$(document).ready(() => {

  let selectedTable;
  let partyName;
  let partySize;


  // ASSIGNING TABLE NUMBER UPON CLICK & SHOWING FORM
  $(".table").click((event) => {
    selectedTable = $(event.target);
    if ($(selectedTable).hasClass("available")) {
      $("#table-num").text($(event.target).val())
      $(".popup").fadeIn(750);
    }
  })

  // CLICKING X TO GET OUT OF FORM
  $("#trash").click(() => {
    $(".popup").fadeOut(750);
  });  

  // WHEN SAVE IS CLICKED -> HIDES FORM, CHANGES CLASS, LOGS INFO, CLEARS FORM
  $(".save").click(() => {
    $(".popup").fadeOut(750);
    selectedTable.addClass("reserved");
    selectedTable.removeClass("available");
    partyName = $("#name").val();
    partySize = $("#size").val();
    selectedTable.attr("name", partyName);
    selectedTable.attr("size", partySize);
    $("input").val("");
  })
  
  // HOVER TO SEE RESERVED TABLE INFO
    $(".table").on("mouseenter", (event) => {
      if ($(event.target).hasClass("reserved")) {
        $(event.target).append(`<p>Name: ${$(event.target).attr("name")} Size: ${$(event.target).attr("size")}</p>`);
      }
    }).on("mouseleave", (event) => {
      $("p").remove().html("");
    })
  })

