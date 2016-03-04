var fakeProjNames = [
"Yeeehaw",
"BamBam",
"Charlie",
// "Delta",
// "Eskimo",
// "Fascination",
// "Gob",
// "Shebamsplat"
]

var rows = fakeProjNames.length;
var columns = 2;
var $row = $("<div />", {
  class: "row"
});
var $square = $("<div />", {
  class: "square"
});
var $projectBox = $("<div />", {
  class: "project-name-box"
})

$(document).ready(function() {
  for (var i=0; i < columns; i++) {
    $row.append($square.clone());
  }
  for (var i=0; i<rows; i++){
    $(".grid-wrapper").append($row.clone());
  }

  var rowsMade = $(".grid-wrapper").children(".row");
  $.each(rowsMade, function( rowIndex, rowValue) {
    var squares = $(rowValue).children(".square");
    $.each(squares, function( squareIndex, squareValue) {
      if (squareIndex === 0) {
        $(this).text(rowIndex +1);
      }
      else if (squareIndex === 1) {
        $(this).droppable({

        });
        $(this).append($projectBox.clone());
        var projBox = $(this).children(".project-name-box");
        $(projBox).text(fakeProjNames[rowIndex]);
      }
    })
  })

  $(".project-name-box").draggable({
    revert: "invalid"
  });
});
