import React from "react";
function Heading() {
  let currHour = new Date().getHours();
  let headingColor = {
    color: ""
  };
  let greeting = "";

  if (currHour < 12) {
    greeting = "Good Morning!";
    headingColor.color = "red";
  } else if (currHour < 18) {
    greeting = "Good Afternoon!";
    headingColor.color = "green";
  } else {
    greeting = "Good Night!";
    headingColor.color = "blue";
  }

  return (
    <h1 className="heading" style={headingColor}>
      {greeting}
    </h1>
  );
}

export default Heading;
