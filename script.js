	var calculateDistance = function (event, remote) {
      var diffX = event.offsetX - remote.x;
      var diffY = event.offsetY - remote.y;
      return ((diffX ** 2) + (diffY ** 2))**(1/2);
    };
																					   
    var determineHint = function (distance) {
      if (distance < 10) {
        return "Boiling hot!";
      } else if (distance < 20) {
        return "Really hot";
      } else if (distance < 40) {
        return "Hot";
      } else if (distance < 80) {
        return "Warm";
      } else if (distance < 160) {
        return "Cold";
      } else if (distance < 320) {  //don't want too small of an image
        return "Really cold";
      } else {
        return "Freezing!";
      }
    };

    var picWidth = document.getElementById("pic").width;
    var picHeight = document.getElementById("pic").height;
    var clicks = 0;

    var randomNumber = function (lengthOfSide) {
      return Math.floor(Math.random() * lengthOfSide);
    };
 
    var remote = {
      x: randomNumber(picWidth),
      y: randomNumber(picHeight)
    };
																		  
    $("#pic").click(function (event) {
      clicks++;

      var distance = calculateDistance(event, remote);
	  
      var hintToDisplay = determineHint(distance);

      $("#hint").text(hintToDisplay);

      if (distance < 8) {
        alert("Found the remote in " + clicks + " clicks!");
      }
    });