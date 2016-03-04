var fakeProjNames = [
"Yeeehaw",
"BamBam",
"Charlie",
"Delta",
"Eskimo",
"Fascination",
"Gob",
"Shebamsplat",
"9",
"Team up",
"Hallejlujah"
]

var updateRankingNumberInElementText = function(list){
  for (var i=0; i<list.length; i++){
    // debugger;
    var element = list[i];
    var sliceFrom = (element.innerText.indexOf("."));
    var originalText = element.innerText.slice(sliceFrom);
    var newText = (i+1) + originalText;
    element.innerText = newText;
  }
}

$(document).ready(function() {
  for (var i=0; i<fakeProjNames.length; i++){
    $(".project-list").append('<li class=".project-list-element">' + (i+1) + '. ' + fakeProjNames[i] + '</li>');
  }

  $(".project-list").sortable({
    connectWith: "ul",
    update: function() {
      var currentList = this.children;
      updateRankingNumberInElementText(currentList);

    }
  });

  $(".project-list-element").draggable({
    revert:  "invalid",
    connectToSortable: ".project-list"
  });

});



