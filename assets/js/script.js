
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
    id: "textField" + arrayHours[i],
  });

  $("#event" + i).append(textBox);

  // Accesses array
  var hourContent = document.createTextNode(arrayHours[i]);
  $("#hour" + i).append(hourContent);

  // Creates the save button
  var saveBtn = $("<button/>", {
    class: "btn btn-primary",
    id: arrayHours[i]
  });

  // Creates the image for the button
  var saveBtnImg = $("<i/>", {
    class: "far fa-save",
  });

  // Appends to the HTML using string concat
  $("#save" + i).append(saveBtn);
  $("#" + arrayHours[i]).append(saveBtnImg);

  //Saves appointment on calender 
  //Creates function for save button
  $("#" + arrayHours[i]).on("click", function()
  {
   // Grabs text area content 
    var saveText = $("#textField" + this.id);

    console.log (saveText)
    // Creates local storage
    localStorage.setItem(this.id , saveText);

    
    // retrieve the stored data and display it on the page
  });
  
   
}
localStorage.clear();






