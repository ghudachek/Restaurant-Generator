
//let API_KEY = dc94f6e47c74ca3499a36e0541cb3e65


//gets city ID:
// https://developers.zomato.com/api/v2.1/cities?q=Nashville&apikey=dc94f6e47c74ca3499a36e0541cb3e65
async function getCityId(city) {
  try {
    let response = await axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${city}&apikey=dc94f6e47c74ca3499a36e0541cb3e65`)

    let cityId = response.data.location_suggestions[0].id
    //console.log(cityId) make sure it grabs the right one..

    let restaurantSearch = await axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&apikey=dc94f6e47c74ca3499a36e0541cb3e65`)
    console.log(restaurantSearch.data)

    restaurantSearch.data.restaurants.forEach(element => {
      console.log(element.restaurant.name)
      console.log(element.restaurant.location.address)
      console.log(element.restaurant.timings)
      console.log(element.restaurant.url)
    });


  } catch (err) {
    console.log(err)
  }

}

getCityId('Nashville')



