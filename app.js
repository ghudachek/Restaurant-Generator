
// API_KEY = dc94f6e47c74ca3499a36e0541cb3e65

//GLOBAL VARIABLES:
const userInput = document.querySelector('.search')
const listButton = document.querySelector('#add')
const fetchButton = document.getElementById('find')


//GET CITY ID:
async function getLocations(city) {
  try {

    let response = await axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${city}&apikey=dc94f6e47c74ca3499a36e0541cb3e65`)

    response.data.location_suggestions.forEach(city => {

      let cityOption = {
        name: city.name,
        id: city.id
      }

      const cityOptions =
        `  <button class='choice-button' value='${cityOption.id}' id='${cityOption.name}'>${cityOption.name}</button> `

      const cityContainer = document.querySelector('.city-options')
      cityContainer.insertAdjacentHTML('beforeend', cityOptions)


    })
    let citybutton = document.querySelectorAll('.city-options button')

    citybutton.forEach(button => {

      button.addEventListener('click', (e) => {
        e.preventDefault()

        getRestaurants(button.value)
        deletePrevious()

      })

    })

  } catch (err) {
    console.log(err)
  }

}

//Random start for restaurant list:
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let random = getRandomInt(80)

//GET RESTAURANTS:
//use city id to get restaurants...

async function getRestaurants(cityId) {
  try {

    let restaurantSearch = await axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&start=${random}&count=20&apikey=dc94f6e47c74ca3499a36e0541cb3e65`)


    restaurantSearch.data.restaurants.forEach(element => {
      let restName = element.restaurant.name
      let restAddress = element.restaurant.location.address
      let restCuisine = element.restaurant.cuisines
      let restHours = element.restaurant.timings
      let restWebsite = element.restaurant.url
      let restRating = element.restaurant.user_rating.aggregate_rating
      let phoneNum = element.restaurant.phone_numbers
      const restaurantInfo =
        `  
      <label class='restaurant'>${restName}</label> 
    <div class='restData'>
    <h2>${restName}: <a id='rating'>${restRating} &#9733s</a> </h2>
    <button id='save'>Add to List</button>  
    <p>Cuisine: ${restCuisine}</p>
    <p>Hours: ${restHours}</p> 
    <a>&#9900 Address: ${restAddress}</a><br>
    <a> &#9900 </a>
    <a href=${restWebsite}> Webstie</a> <br>
    <a>&#9900 </a>  
    <a href=${phoneNum}>${phoneNum}</a>
      
    </div>
        `
      const restInfoContainer = document.querySelector('.search-results')
      restInfoContainer.insertAdjacentHTML("beforeend", restaurantInfo)

    });
    addSaved();

  } catch (err) {
    console.log(err)
  }
}

//PICK THE CITY INPUT
fetchButton.addEventListener('click', (e) => {
  e.preventDefault()
  getLocations(userInput.value)
  userInput.value = ''
  changeCities();

})


///ADDS TO SAVED

function addSaved() {

  let listButton = document.querySelectorAll('#save')
  let lists = document.querySelectorAll('.restaurant')
  let extraData = document.querySelectorAll('.restData')

  for (i = 0; i < lists.length; i++) {
    lists[i].className = `restaurant${[i]} `
    extraData[i].className = `restData${[i]}`

  }
  for (i = 0; i < listButton.length; i++) {
    listButton[i].className = `save${[i]} `
    let restaurant = document.querySelector(`.restaurant${i}`)
    let delRest = document.querySelector(`.restData${i}`)

    listButton[i].addEventListener('click', (e) => {
      e.preventDefault()
      let divList = document.querySelector('.user-list')
      let searchResults = document.querySelector('.search-results')

      divList.append(restaurant)
      searchResults.removeChild(delRest)

      makeCheckbox()
    })

  }

}


///GENERATE RANDOM PICK:

function choose() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let currentChoice = 0;
  let savedChoices = document.querySelectorAll('.user-list label')

  getRandomInt(savedChoices.length)
  currentChoice = getRandomInt(savedChoices.length);

  let chosen = document.querySelector('.generated')
  let newChild = document.createElement('h3')
  newChild.innerText = savedChoices[currentChoice].innerText

  //Replacement of Generated Restaurant
  let oldChild = chosen.lastChild

  if (chosen.lastChild) {
    chosen.replaceChild(newChild, oldChild)
  } else { chosen.append(newChild) }
}

let generatorButton = document.querySelector('#generate-rest')
generatorButton.addEventListener('click', (e) => {
  e.preventDefault();
  choose();

})



/// MAKE CHECKBOX:
function makeCheckbox() {

  const yourList = document.querySelector('.user-list')
  let elements = yourList.querySelectorAll('label')

  let input = ''
  for (i = 0; i < elements.length; i++) {
    input =
      `<input type='checkbox' name='${elements[i].innerText}'><br>
      `
  }

  yourList.insertAdjacentHTML("beforeend", input)

}

//REFRESH BUTTONS AND SEARCHES 
function deletePrevious() {
  let searchArea = document.querySelector('.search-results')
  //Delete Previous input responses:
  while (searchArea.lastChild) {
    searchArea.removeChild(searchArea.lastChild)
  }
}

//change city options:
function changeCities() {
  let cityOptions = document.querySelector('.city-options')
  while (cityOptions.lastChild) {
    cityOptions.removeChild(cityOptions.lastChild)
  }

}


//LET USER ADD TO THE LIST WITH INPUT

listButton.addEventListener('click', (e) => {
  e.preventDefault();
  let label = document.createElement('label')
  let listInput = document.querySelector('.list-add')

  if (listInput.value !== '') {
    label.innerText = listInput.value
    let list = document.querySelector('.user-list')
    list.append(label)
    listInput.value = ''
    makeCheckbox()
  }
})


// SIDEBAR FUNCTIONS -- from https://www.w3schools.com/howto/howto_js_sidenav.asp
function openNav() {
  document.getElementById("sideBar").style.width = "30%";
  document.getElementById("main").style.marginLeft = "30%";
  document.getElementById("footer").style.marginLeft = "30%"
}

function closeNav() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("footer").style.marginLeft = "0";
}

//FOR SMALL SCREENS:
function openNavSmall() {
  document.getElementById("sideBar").style.width = "100%";
  document.getElementById("main").style.marginLeft = "100%";
  document.getElementById("footer").style.marginLeft = "100%"
}

function closeNavSmall() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("footer").style.marginLeft = "0";
}
