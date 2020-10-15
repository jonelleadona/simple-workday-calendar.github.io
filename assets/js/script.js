
// Global arrays 
var businessHrs = 9;
var arrayHours = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

// Displays current date 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// Creats the timeblock rows and columns
for (var i = 0; i < businessHrs; ++i)
{
  var timeBlockRow = $("<div/>", {
    class: "row",
    id: "timeBlockRow" + i
  }).appendTo("#timeBlockContainer");

  var timeBlockHour = $("<div/>", {
    class: "col",
    id: "hour" + i
  });

  var timeBlockEvent = $("<div/>", {
    class: "col",
    id: "event" + i
  });

  var timeBlockSave = $("<div/>", {
    class: "col",
    id: "save" + i
  }); 

  // Time block container
  $("#timeBlockRow" + i).append(timeBlockHour, timeBlockEvent, timeBlockSave); 

  // Creates the area for text
  var textBox = $("<textarea/>", {
    style: "border: none", 
    id: "textField",
  });

  $("#event" + i).append(textBox);

  // Accesses array
  var hourContent = document.createTextNode(arrayHours[i]);
  $("#hour" + i).append(hourContent);

  // Creates the save button
  var saveBtn = $("<button/>", {
    class: "btn btn-primary",
    id: "sBtn" + i
  });

  // Creates the image for the button
  var saveBtnImg = $("<i/>", {
    class: "far fa-save",
  });

  $("#save" + i).append(saveBtn);
  $("#sBtn" + i).append(saveBtnImg);


}




