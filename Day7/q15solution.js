let flag = parseInt(prompt("Enter Heat code (1-3):"));
switch (flag) {
  case 1:
    console.log("Flag " + flag + " is HOT");
    break;
  case 2:
    console.log("Flag " + flag + " is LUKE WARM");
    break;
  case 3:
    console.log("Flag " + flag + " is COLD");
    break;
  default:
    console.log("Flag " + flag + " is OUT OF RANGE");
    break;
}
