// Challenge 1
const country = "India"

function city() {
  const name = "Delhi"
  
  function area() {
    const street = "Connaught Place"
    console.log(country,name,street);
  }
  
  area()
}

city()

// Challenge 2
const language = "JavaScript"

function backend() {
  const language = "Python"
  frontend()
}

function frontend() {
  console.log(language)  
}

backend()