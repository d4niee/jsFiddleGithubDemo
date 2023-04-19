function handleButtonClick() {
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  console.log('button clicked, new color: ', randomColor);
  document.getElementById("heading").style.color = randomColor.toString();
}
