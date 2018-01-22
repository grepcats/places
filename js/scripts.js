function Place(location, landmarks, timeOfYear, notes) {
  this.locationText = location;
  this.landmarkArray = landmarks;
  this.timeOfYearText = timeOfYear;
  this.notesText = notes;
};

$(document).ready(function() {
  $("#places").submit(function(event) {
    event.preventDefault();

    var location = $("input#location").val();
    var landmarks = [$("input#landmark1").val(), $("input#landmark2").val(), $("input#landmark3").val()];
    var timeOfYear = $("input#timeOfYear").val();
    var notes = $("input#notes").val();

    var newPlace = new Place(location, landmarks, timeOfYear, notes);

    $("ul").append("<li><span class='click'>" + location + "</span></li>")

    $("input#location").val("");
    $("input#landmark1").val("");
    $("input#landmark2").val("");
    $("input#landmark3").val("");

    $(".click").last().click(function() {
      $(".output-group").show();
      $(".output-group h2").text(newPlace.locationText);
      $(".location-output").text(newPlace.locationText);
      $(".landmarks-output").text(newPlace.landmarkArray.join(", "));
    });



  });

});
