let colour = prompt("Enter Color code character:");
switch (colour.toLowerCase()) {
  case 'r':
    console.log("Color Code " + colour + " is RED");
    break;
  case 'g':
    console.log("Color Code " + colour + " is GREEN");
    break;
  case 'b':
    console.log("Color Code " + colour + " is BLUE");
    break;
  default:
    console.log("Color Code " + colour + " is BLACK");
    break;
}
