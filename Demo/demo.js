function handleButtonClick() {
  console.log('button clicked');
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('heading').style.color = randomColor;
}
