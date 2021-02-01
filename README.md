# Project Overview

## Restaurant Generator

[Restaurant Generator](https://ghudachek.github.io/Restaurant-Generator/)

## Project Description

Will grab restaurants in a given area using the API Zomato by giving a city. Restaurants will show name, website link,location, and hours of operation. Listed restaurants can be saved to your own list and randomized to generate "where you will eat tonight?" for those who can never choose!

## API and Data Sample

API: https://developers.zomato.com/api

    "results_found": 3734,
    "results_start": 0,
    "results_shown": 20,
    "restaurants": [
        {
            "restaurant": {
                "R": {
                    "res_id": 17195329,
                    "is_grocery_store": false,
                    "has_menu_status": {
                        "delivery": -1,
                        "takeaway": -1
                    }
                },
                "apikey": "dc94f6e47c74ca3499a36e0541cb3e65",
                "id": "17195329",
                "name": "The Pharmacy Burger Parlor & Beer Garden",
                "url": "https://www.zomato.com/nashville/the-pharmacy-burger-parlor-beer-garden-nashville?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                "location": {
                    "address": "731 McFerrin Ave, Nashville 37206",
                    "locality": "East Nashville",
                    "city": "Nashville",
                    "city_id": 1138,
                    "latitude": "36.1850189000",
                    "longitude": "-86.7541330000",
                    "zipcode": "37206",
                    "country_id": 216,
                    "locality_verbose": "East Nashville, Nashville"
                },
                "switch_to_order_menu": 0,
                "cuisines": "Burger",
                "timings": "Lunch, Dinner, Late (Sun, Mon, Tue, Wed, Thu, Fri, Sat)",
                "average_cost_for_two": 10,
                "price_range": 1,
                "currency": "$",
## Wireframes

* [Desktop WireFrame](https://whimsical.com/restaurant-generator-site-Vo44rwy9KRcjKoviKp8tXA)
* [Mobile WireFrame](https://whimsical.com/smartphone-restaurant-generator-layout-CJPYpwyYah4d8dX58aL7aG)

#### MVP 

- Gather Restaurant title, location, website, and hours of operation from API chosen(Zomato).
- Allow users to search for Restaurants in their area given a zip-code.
- Incorporate restaurant data listed above into a clean readable design on webpage(CSS/flexbox).
- Give users the option to create their own seperate list of "saved" or "liked restaurants.
- Give users the ability to checkoff from their list -only to show functionality!(will not be able to save user data on refresh).
- Give users the ability to generate a randomly picked restaurant from their liked list as a way to choose where they may eat next.

#### PostMVP  
- Use a map API to generate a map of user chosen location with list of restaurants on it.
- Give users the ability to add their own restaurants to their list(write in response).
## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jan 26| Project Approval / Psuedocode layout of HTML,JS,CSS/ Boilerplate HTML&JS w/ API grab functioning/| Complete
|Jan 27| Link API data to html elements and get user search section functioning. | Complete
|Jan 28| Create 'saved list' for user add JS functions: button, checkoff,random generator. | Complete
|Jan 29| Have all MVPs completed by end of the day | Complete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

 ![Priority Matrix](https://github.com/ghudachek/Restaurant-Generator/blob/main/Priority%20Matrix.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding JS to grab data from API | H | 1hrs| 0.5hrs | 0.5hrs |
| Create HTML boiler| H | 0.5hrs| 0.5hrs | 0.5hrs |
| Link JS data to search button, and create search output (JS to HTML) | H | 3hrs| 3hrs | 3hrs |
| Create "add" button(linked to restaurants) to  add to saved list | H | 3hrs| 4hrs | 4hrs |
| Create Nav Bar for Saved list | H | 3hrs| 1hrs | 1hrs |
| Create check-off boxes too saved list| H | 3hrs| 1hrs | 1hrs |
| Create delete buttons for search results area | H | 3hrs| 2hrs | 2hrs |
| Get input sections to delete old input on button click | H | 2hrs| 1hrs | 1hrs |
| Add flexbox CSS to saved list and main search fields of webpage | H | 3hrs| 4hrs | 4hrs |
| Create MediaQuery to properly size elements on page | H | 3hrs| 4hrs | 4hrs |
| Add map using second API| H | 3hrs| NA/hrs | NA/hrs |
| Have map grab restaurant locations and show on map | H | 3hrs| NA/hrs | NA/hrs |

| Total | H | 30.5hrs| 21hrs | 21hrs |

## Code Snippet
My API requires you to grab restaurants by a city id that they have coded into each city. This required me to grab the city ids first before grabbing the restaurants. When searching cities a list of 1- 10+ options can come up. At first, my grab city Id function could only grab 1-3 city options. I decided to rewrite it and was happy with my result. It now grabs all city options and presents them to the user. It also simplified the code compared to the previous.

response.data.location_suggestions.forEach(city => {

      let cityOption = {
        name: city.name,
        id: city.id
      }

      const cityOptions =
        `  <button class='choice-button' value='${cityOption.id}' id='${cityOption.name}'>${cityOption.name}</button> `

      const cityContainer = document.querySelector('.city-options')
      cityContainer.insertAdjacentHTML('beforeend', cityOptions)

      console.log(cityOptions)

    })
    let citybutton = document.querySelectorAll('.city-options button')
    console.log(citybutton)
    citybutton.forEach(button => {

      button.addEventListener('click', (e) => {
        e.preventDefault()
        //console.log(cityOption0.id) -- grabs correctly
        getRestaurants(button.value)
        deletePrevious()
      })

    })



## Change Log
 - Got rid of the user ability to add rating to their saved list for sake of simplier, clean NavBar.
 - Changes layout for the Saved list and random generator to always be on a Side NavBar that can be opened and closed for all screen sizes.
 - Ended up not having time to add maps function 
 
