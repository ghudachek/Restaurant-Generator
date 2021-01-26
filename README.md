# Project Overview

## Restaurant Generator

[Restaurant Generator](https://github.com/ghudachek/Restaurant-Generator)

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
- Give users the ability to checkoff from their list and rate the Restaurant on their list -only to show functionality!(will not be able to save user data on refresh).
- Give users the ability to generate a randomly picked restaurant from their liked list as a way to choose where they may eat next.

#### PostMVP  
- Use a map API to generate a map of user chosen location with list of restaurants on it.
- Give users the ability to add other restaurants to their list (even if they weren't listed on the search?).
-Local store saving??
## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jan 26| Project Approval / Psuedocode layout of HTML,JS,CSS/ Boilerplate HTML&JS w/ API grab functioning/| Incomplete
|Jan 27| Link API data to html elements and get user search section functioning. | Incomplete
|Jan 28| Create 'saved list' for user add JS functions: button, rating, checkoff,random generator. | Incomplete
|Jan 29| Have all MVPs completed by end of the day | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

 ![Priority Matrix](https://github.com/ghudachek/Restaurant-Generator/blob/main/Priority%20Matrix.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding JS to grab data from API | H | 1hrs| hrs | hrs |
| Create HTML boiler| H | 0.5hrs| hrs | hrs |
| Link JS data to search button, and create search output (JS to HTML) | H | 3hrs| hrs | hrs |
| Create "add" button(linked to restaurants) to  add to saved list | H | 3hrs| hrs | hrs |
| Create rating section and check-off boxes too saved list| H | 3hrs| hrs | hrs |
| Create random restaurant generator button | H | 3hrs| hrs | hrs |
| Add flexbox CSS to saved list and main search fields of webpage | H | 3hrs| hrs | hrs |
| Create MediaQuery to move saved list to a side menu option | H | 3hrs| hrs | hrs |
| Advance CSS to add style | H | 3hrs| hrs | hrs |
| Create map: add from API| H | 3hrs| hrs | hrs |
| Get map to show listed restaurants on it | H | 3hrs| hrs | hrs |
| Have map toggle per user preference(hide unless clicked on) | H | 1.5hrs| hrs | hrs |
| Total | H | 30hrs| hrs | hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
