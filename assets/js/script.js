
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
    var saveText = $("#textField" + this.id).val();

    // Store data based on hour
    localStorage.setItem(this.id, saveText);
  });

  // Display data after all of the elements are created
  // This needs to occur here after everything because the elements need to be created
  // and appended to the page first before we go searching for it to display data
  $("#textField" + arrayHours[i]).val(localStorage.getItem(arrayHours[i]));

  // TO BE DELETED: On line 76 above
  // - The part '$("#textField" + arrayHours[i])' is searching for the textarea element using the ID. If i = 0, the ID it's searching for is #textField9AM
  // - .val() is a function/property of the textarea element that let the user get/set the text in the field
  // - localStorage.getItem(arrayHours[i]) returns the stored data for a specified hour/time block
  // So, if i = 0 for line 76, the code would look like this if you replace the variables with the appropriate string value:
  // $("#textField9AM").val(localStorage.getItem("9AM"));

  // TO BE DELETED:
  // After displaying the data, use this same loop that is looping through each
  // hour to color code the appointment (gray for past, red for present, and green for future)
  // Steps/Tasks to do:
  // 1) Since this loop is already looping through each hour, I can use the variable i to access the arrayHours[] array and use the hour string to search for the ID of the textarea like I did on line 76
  // 2) I need to google how to change the background color of the textarea using jQuery syntax
  // 3) After finding the textarea element for the current hour/row from step 1, I need to compare the current hour/row with the actual hour and decide what color the textarea needs to be. Maybe Moment.JS can help me to format the hours in a way so I can compare them
  // 4) Note that the spacing and sizing will look off at first. After I'm doing color-coding, I need to make it so that the middle column is bigger, and also change the size of the textarea to take up the entire space of the middle column
  // 5) Additional CSS stuff will need to be done as well to make it look pretty
}

// TO BE DELETED: Uncomment to clear local storage after testing so local storage doesn't fill up
// localStorage.clear();
