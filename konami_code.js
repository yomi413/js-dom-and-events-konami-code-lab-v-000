const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0

function init() {
  // Write your JavaScript code inside the init() function
  const doc = document.body

  doc.addEventListener('keydown', function(event) {
    return alert('Success!')
  })

  // const key = parseInt(event.detail || event.which);
  //
  // if (key === code[index]) {
  //   ++index
  //   if (index === code.length) {
  //     alert("All sytems passing!")
  //
  //     index = 0
  //   }
  // } else {
  //   index = 0
  // }
}
