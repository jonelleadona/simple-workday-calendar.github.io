var timeBlockRow = $("<div/>", {
  class: "row",
  id: "timeBlockRow"
}).appendTo("#timeBlockContainer");

var timeBlockHour = $("<div/>", {
  class: "col",
  id: "hour"
});

var timeBlockEvent = $("<div/>", {
  class: "col",
  id: "event"
});

var timeBlockSave = $("<div/>", {
  class: "col",
  id: "save"
});

// Time block container
$("#timeBlockRow").append(timeBlockHour, timeBlockEvent, timeBlockSave); 
