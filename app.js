
//let API_KEY = dc94f6e47c74ca3499a36e0541cb3e65



//gets city ID:
// https://developers.zomato.com/api/v2.1/cities?q=Nashville&apikey=dc94f6e47c74ca3499a36e0541cb3e65

let userInput = document.querySelector('.search')
let listButton = document.querySelector('#add')
let fetchButton = document.getElementById('find')


async function getLocations(city) {
  try {
    //grab city id first...
    let response = await axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${city}&apikey=dc94f6e47c74ca3499a36e0541cb3e65`)


    //console.log(cityId)
    //0 
    let cityOption0 = {
      name: response.data.location_suggestions[0].name,
      id: response.data.location_suggestions[0].id
    }
    //1
    let cityOption1 = {
      name: response.data.location_suggestions[1].name,
      id: response.data.location_suggestions[1].id
    }
    //console.log(response.data.location_suggestions[1].name)
    //2  
    let cityOption2 = {
      name: response.data.location_suggestions[2].name,
      id: response.data.location_suggestions[2].id
    }
    //console.log(response.data.location_suggestions[2].name)
    const cityOptions =
      `
    <button class='choice-button' id='city-choice0'>${cityOption0.name}</button>
    <button class='choice-button' id='city-choice1'>${cityOption1.name}</button>
    <button class='choice-button' id='city-choice2'>${cityOption2.name}</button>
     `
    const cityContainer = document.querySelector('.city-options')
    cityContainer.insertAdjacentHTML('beforeend', cityOptions)
    //console.log(cityId) make sure it grabs the right one..

    let selectCity0 = document.querySelector('#city-choice0')
    selectCity0.addEventListener('click', (e) => {
      e.preventDefault()
      //console.log(cityOption0.id) -- grabs correctly
      getRestaurants(cityOption0.id)
      deletePrevious()
    })
    let selectCity1 = document.querySelector('#city-choice1')
    selectCity1.addEventListener('click', (e) => {
      e.preventDefault()
      getRestaurants(cityOption1.id)
      deletePrevious()
    })
    let selectCity2 = document.querySelector('#city-choice2')
    selectCity2.addEventListener('click', (e) => {
      e.preventDefault()
      getRestaurants(cityOption2.id)
      deletePrevious()
    })




  } catch (err) {
    console.log(err)
  }

}
//use city id to get restaurants...
async function getRestaurants(cityId) {
  try {

    let restaurantSearch = await axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&apikey=dc94f6e47c74ca3499a36e0541cb3e65`)
    console.log(restaurantSearch.data)
    // console.log(restaurantSearch.data.restaurants.length)
    //console.log(restaurantSearch.data.restaurants)
    //console.log(restaurantSearch.data.restaurants[1])


    restaurantSearch.data.restaurants.forEach(element => {
      let resId = element.restaurant.id
      //console.log(element.restaurant.name)
      let restName = element.restaurant.name
      //console.log(element.restaurant.location.address)
      let restAddress = element.restaurant.location.address
      //console.log(element.restaurant.timings)
      let restHours = element.restaurant.timings
      //console.log(element.restaurant.url)
      let restWebsite = element.restaurant.url
      //console.log(element.restaurant.user_rating.aggregate_rating)
      let restRating = element.restaurant.user_rating.aggregate_rating
      //console.log(element.restaurant.phone_numbers)
      let phoneNum = element.restaurant.phone_numbers
      const restaurantInfo =
        `  
      <label class='restaurant'>${restName}</label> 
    <div class='restData'>
    <h2>${restName}: <a id='rating'>${restRating} &#9733s</a> </h2>
    <button id='save'>Add to List</button>  
    <p>Hours: ${restHours}</p> 
    <a>&#9900 Address: ${restAddress}</a><br>
    <a> &#9900 </a>
    <a href=${restWebsite}> Webstie</a> <br>
    <a>&#9900 </a>  
    <a href=${phoneNum}>${phoneNum}</a>
      
    </div>
  
        `
      // console.log(restaurantInfo)
      const restInfoContainer = document.querySelector('.search-results')
      restInfoContainer.insertAdjacentHTML("beforeend", restaurantInfo)


    });
    addSaved()


  } catch (err) {
    console.log(err)
  }

}

//PICK THE CITY...
fetchButton.addEventListener('click', (e) => {
  e.preventDefault()
  //console.log(userInput.value)
  getLocations(userInput.value)
  changeCities()

})

///////
///ADDS ONE LI UNIT (RESTAURANT TO SAVED PERSONAL LIST)
/// does so by changing the button and li to each have a different (numbered) classname to select seperatley
function addSaved() {
  //ADD TO SAVED 
  let listButton = document.querySelectorAll('#save')
  let lists = document.querySelectorAll('.restaurant')
  let extraData = document.querySelectorAll('.restData')
  console.log(listButton) //is an array!
  for (i = 0; i < lists.length; i++) {
    lists[i].className = `restaurant${[i]} `
    extraData[i].className = `restData${[i]}`
    //console.log(lists[i])
  }
  for (i = 0; i < listButton.length; i++) {
    listButton[i].className = `save${[i]} `
    let restaurant = document.querySelector(`.restaurant${i}`)
    let delRest = document.querySelector(`.restData${i}`)
    //console.log(delRest)
    //console.log(listButton[i]) it works! gives each button a different class name ..
    listButton[i].addEventListener('click', (e) => {
      e.preventDefault()
      let divList = document.querySelector('.user-list')
      let searchResults = document.querySelector('.search-results')
      // let del = document.querySelectorAll('.restaurants')
      console.log(searchResults)
      divList.append(restaurant)
      //console.log(divList)
      searchResults.removeChild(delRest) //removes extra data from search
      //console.log(divList)

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
  console.log(savedChoices)
  getRandomInt(savedChoices.length)
  currentChoice = getRandomInt(savedChoices.length);
  console.log(currentChoice)
  console.log(savedChoices[currentChoice].innerText)
  let chosen = document.querySelector('.generated')
  let newChild = document.createElement('h3')
  newChild.innerText = savedChoices[currentChoice].innerText

  let oldChild = chosen.lastChild
  //Replacement of Generated Restaurant
  if (chosen.lastChild) {
    chosen.replaceChild(newChild, oldChild)
  } else { chosen.append(newChild) }
}

let generatorButton = document.querySelector('#generate-rest')
generatorButton.addEventListener('click', (e) => {
  e.preventDefault();
  choose();

})



/// makecheckboxes on List

function makeCheckbox() {

  const yourList = document.querySelector('.user-list')
  let elements = yourList.querySelectorAll('label')
  console.log(yourList)
  console.log(elements)
  let input = ''
  for (i = 0; i < elements.length; i++) {
    input =
      `<input type='checkbox' name='${elements[i].innerText}'><br>`
  }

  yourList.insertAdjacentHTML("beforeend", input)

}

//REFRESH BUTTONS AND SEARCHES 
function deletePrevious() {
  let searchArea = document.querySelector('.search-results')
  //Delete Previous responses....
  while (searchArea.lastChild) {
    searchArea.removeChild(searchArea.lastChild)
  }
}

function changeCities() {
  let cityOptions = document.querySelector('.city-options')
  while (cityOptions.lastChild) {
    cityOptions.removeChild(cityOptions.lastChild)
  }


}

// SIDEBAR FUNCTIONS -- from https://www.w3schools.com/howto/howto_js_sidenav.asp
function openNav() {
  document.getElementById("sideBar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
//LET USER ADD TO THE LIST WITH INPUT

listButton.addEventListener('click', (e) => {
  e.preventDefault();
  let label = document.createElement('label')
  let listInput = document.querySelector('.list-add')
  console.log(listInput.value)
  label.innerText = listInput.value
  let list = document.querySelector('.user-list')
  list.append(label)
  makeCheckbox()
})



//consdier grabbing lat and long from data.restaurant.location(.latitude/longitude) for map placement?