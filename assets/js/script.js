
// Global arrays 
var businessHrs = 9;
var arrayHours = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

// Displays current date 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// Creats the timeblock rows and columns
for (var i = 0; i < businessHrs; ++i)
{
  var appointmentTime = moment(arrayHours[i], "hA");
  var currentTimeString = moment().format("hA");
  var currentTime = moment(currentTimeString, "hA");

  var appointmentColor = "";

  // Compare appointment time block with current time and set appropriate color
  if (appointmentTime.isBefore(currentTime))
  {
    appointmentColor = "past";
  }
  else if (appointmentTime.isSame(currentTime))
  {
    appointmentColor = "present";
  }
  else
  {
    appointmentColor = "future";
  }

  // Create container row to hold each time block
  var timeBlockRow = $("<div/>", {
    class: "row",
    id: "timeBlockRow" + i
  }).appendTo("#timeBlockContainer");

  // Create empty column for spacing
  var col = $("<div/>", {
    class: "col-sm-1"
  }); 
  
  // Create column container to hold the time text
  var timeBlockHour = $("<div/>", {
    class: "col-sm-1 hour",
    align: "right",
    style: "border-style: dashed hidden hidden; padding: 15px",
    id: "hour" + i
  });

  // Create column container to hold the appointment text
  var timeBlockEvent = $("<div/>", {
    class: "col-sm",
    id: "event" + i
  });

  // Create column container to hold the save button
  var timeBlockSave = $("<div/>", {
    class: "col-sm-2",
    float: "center",
    id: "save" + i
  }); 

  // Create empty column for spacing
  var col2 = $("<div/>", {
    class: "col-sm-1"
  }); 

  // Time block container
  $("#timeBlockRow" + i).append(col, timeBlockHour, timeBlockEvent, timeBlockSave, col2); 

  // Create the area for appointment text
  var textBox = $("<textarea/>", {
    class: appointmentColor,
    style: "border: none",
    width: "100%", 
    height: "100%",
    id: "textField" + arrayHours[i],
  });

  $("#event" + i).append(textBox);

  // Accesses array
  var hourContent = document.createTextNode(arrayHours[i]);
  $("#hour" + i).append(hourContent);

  // Creates the save button
  var saveBtn = $("<button/>", {
    class: "btn btn-primary saveBtn",
    width: "50%",
    height: "100%",
    id: arrayHours[i]
  });

  // Creates the image for the button
  var saveBtnImg = $("<i/>", {
    class: "far fa-save",
    style: "font-size: 30px",
  });

  // Appends to the HTML using string concat
  $("#save" + i).append(saveBtn);
  $("#" + arrayHours[i]).append(saveBtnImg);

  //Saves appointment on calender 
  //Creates function for save button
  $("#" + arrayHours[i]).on("click", function()
  {
    // Grabs text area content
    var saveText = $("#textField" + this.id).val();

    // Store data based on hour
    localStorage.setItem(this.id, saveText);
  });
  
  $("#textField" + arrayHours[i]).val(localStorage.getItem(arrayHours[i]));
}