var i = 1;
var j = -1;
var list = ["Machine Learning Engineer"];
var nameText = "Joshua Alvarado";  // Your name to be typed out
var titleText = list[0];  // Your title to be typed out
var isTypingName = true;  // Flag to check if name is being typed

function txt() {
  var strs;
  
  if (isTypingName) {
    strs = nameText.slice(0, i);
    $("#nameText").html(strs + '|');
  } else {
    strs = titleText.slice(0, i);
    $("#textdisp").html(strs + '|');
  }

  if (i >= 0) {
    if (isTypingName && i != nameText.length) {
      i++;
    } else if (!isTypingName && i != titleText.length) {
      i++;
    } else if (isTypingName && i == nameText.length) {
      isTypingName = false;
      $("#nameText").html(nameText);  // Remove cursor from name after typing
      i = 1;  // Reset counter for title
    }
  }
}

setInterval(txt, 100);
