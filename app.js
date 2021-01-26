
//let API_KEY = dc94f6e47c74ca3499a36e0541cb3e65



//gets city ID:
// https://developers.zomato.com/api/v2.1/cities?q=Nashville&apikey=dc94f6e47c74ca3499a36e0541cb3e65

let userInput = document.querySelector('.search')
let fetchButton = document.getElementById('find')


async function getRestaurants(city) {
  try {
    //grab city id first...
    let response = await axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${city}&apikey=dc94f6e47c74ca3499a36e0541cb3e65`)
    //use city id to get restaurants...
    let cityId = response.data.location_suggestions[0].id
    //console.log(cityId) make sure it grabs the right one..
    // made need a n option button here for user to select correcr location
    let restaurantSearch = await axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&apikey=dc94f6e47c74ca3499a36e0541cb3e65`)
    //console.log(restaurantSearch.data)


    restaurantSearch.data.restaurants.forEach(element => {

      console.log(element.restaurant.name)
      let restName = element.restaurant.name
      console.log(element.restaurant.location.address)
      let restAddress = element.restaurant.location.address
      console.log(element.restaurant.timings)
      let restHours = element.restaurant.timings
      console.log(element.restaurant.url)
      let restWebsite = element.restaurant.url
      console.log(element.restaurant.user_rating.aggregate_rating)
      let restRating = element.restaurant.user_rating.aggregate_rating
      console.log(element.restaurant.phone_numbers)
      let phoneNum = element.restaurant.phone_numbers
      const restaurantInfo =
        `
    <li>
    <h3>${restName}</h3>
    <p>${restRating}</p>
    <a>${restAddress}</a>
    <a href=${phoneNum}>${phoneNum}</a>
    <p>${restHours}</p>
    <a href=${restWebsite}>${restName}'s Webstie</a>
    </li>
    `
      const restInfoContainer = document.querySelector('.search-results')
      restInfoContainer.insertAdjacentHTML("beforeend", restaurantInfo)

    });





  } catch (err) {
    console.log(err)
  }

}

fetchButton.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(userInput.value)
  getRestaurants(userInput.value)
})




//consdier grabbing lat and long from data.restaurant.location(.latitude/longitude) for map placement?




// Grab data for each Restaurant Array: name, location, hours, website  
function getRestaurantsData() {
  restaurantSearch.data.restaurants.forEach(element => {

    console.log(element.restaurant.name)
    let restName = element.restaurant.name
    console.log(element.restaurant.location.address)
    let restAddress = element.restaurant.location.address
    console.log(element.restaurant.timings)
    let restHours = element.restaurant.timings
    console.log(element.restaurant.url)
    let restWebsite = element.restaurant.url
    console.log(element.restaurant.user_rating.aggregate_rating)
    let restRating = element.restaurant.user_rating.aggregate_rating
    console.log(element.restaurant.phone_numbers)
    let phoneNum = element.restaurant.phone_numbers
    const restaurantInfo =
      `
  <li>
  <h3>${restName}</h3>
  <p>${restRating}</p>
  <a>${restAddress}</a>
  <a href=${phoneNum}>${phoneNum}</a>
  <p>${restHours}</p>
  <a href=${restWebsite}>${restName}'s Webstie</a>
  </li>
  `
    const restInfoContainer = document.querySelector('.search-results')
    restInfoContainer.insertAdjacentHTML("beforeend", restaurantInfo)

  });
}