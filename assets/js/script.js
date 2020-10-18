
// Global arrays 
var businessHrs = 9;
var arrayHours = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];

// Displays current date 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


function colorCodeAppointment(hourString) 

  {
    var appointmentTime = moment(hourString, "hA");
    console.log(appointmentTime);
    
    var currentTimeString = moment().format("hA");
    var currentTime = moment(currentTimeString, "hA");
    console.log(currentTime);

    if (appointmentTime.isBefore(currentTime))
    {
      $("#textField" + hourString).css("background", "#e6e6e6");
    }
    else if (appointmentTime.isSame(currentTime))
    {
      $("#textField" + hourString).css("background", "#ff3333");
    }
    else
    {
      $("#textfield" + hourString).css("background", "#5cd65c");
    }
  }




// Creats the timeblock rows and columns
for (var i = 0; i < businessHrs; ++i)
{
  var timeBlockRow = $("<div/>", {
    class: "row",
    id: "timeBlockRow" + i
  }).appendTo("#timeBlockContainer");

  var timeBlockHour = $("<div/>", {
    class: "col col-2",
    align: "right",
    id: "hour" + i
  });

  var timeBlockEvent = $("<div/>", {
    class: "col",
    id: "event" + i
  });

  var timeBlockSave = $("<div/>", {
    class: "col col-2",
    id: "save" + i
  }); 

  // Time block container
  $("#timeBlockRow" + i).append(timeBlockHour, timeBlockEvent, timeBlockSave); 

  // Creates the area for text
  var textBox = $("<textarea/>", {
    style: "border: none",
    width: "600px", 
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
    var saveText = $("#textField" + this.id).val();

    // Store data based on hour
    localStorage.setItem(this.id, saveText);
  });

  
  $("#textField" + arrayHours[i]).val(localStorage.getItem(arrayHours[i]));

  colorCodeAppointment(arrayHours[i])
}
