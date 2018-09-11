const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0

function init(event) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(event.detail || event.which);

  if (key === code[index]) {
    ++index
    if (index === code.length) {
      alert("All sytems passing!")

      index = 0
    } 
  } else {
    index = 0
  }
}