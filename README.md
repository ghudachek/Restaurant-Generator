# Project Overview

## Restaurant Generator

The name of your project.
Deployed url [] ()

## Project Description

Restaurant Generator using API Documenu to grab restaurants by zip-code search. Restaurants will show name, website link,location, and money rating scale (from $-$$$$). Listed restaurants can be saved to your own liked list and randomized to generate "where you will eat tonight?" for those who can never choose!

## API and Data Sample

API: https://documenu.com/

    "totalResults": 83,
    "page": 1,
    "total_pages": 4,
    "more_pages": true,
    "data": [
        {
            "restaurant_name": "Hard Rock Cafe",
            "restaurant_phone": "(615) 742-9900",
            "restaurant_website": "",
            "hours": "",
            "price_range": "",
            "price_range_num": 0,
            "restaurant_id": 3616232086774404,
            "cuisines": [
                "American"
            ],
            "address": {
                "city": "NASHVILLE",
                "state": "TN",
                "postal_code": "37201",
                "street": "100 Broadway",
                "formatted": "100 Broadway NASHVILLE, TN 37201"
            },
            "geo": {
                "lat": 36.16232,
                "lon": -86.774404
            },
            "menus": [],
            "last_updated": "2021-01-05T07:35:32.858Z"
        },

## Wireframes

[Desktop WireFrame](https://whimsical.com/restaurant-generator-site-Vo44rwy9KRcjKoviKp8tXA)
[Mobile WireFrame](https://whimsical.com/smartphone-restaurant-generator-layout-CJPYpwyYah4d8dX58aL7aG)

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Gather Restaurant title, location, website, and cost rating or star rating(if given) from API chosen(Docmenu).
- Allow users to search for Restaurants in their area given a zip-code.
- Incorporate restaurant data listed above into a clean readable design on webpage.
- Give users the option to create their own seperate list of "saved" or "liked restaurants.
- Give users the ability to checkoff from their list and rate the Restaurant on their list.
- Give users the ability to generate a randomly picked restaurant from their liked list as a way to choose where they may eat next.

#### PostMVP  
- Use a map API to generate a map of user chosen location with list of restaurants on it.
- Give users the ability to add other restaurants to their list (even if they weren't listed on the search?)
- Have a way for users to save their list and data they add to it
- create a 'foodie diary' for users-- instead of just a list.. let them add details and images(if you're that person) to their list so they can remeber in the future where they went, what they liked, and be able to share with friends.

## Project Schedule
You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Jan 26| Project Approval / Psuedocode layout of html,css,JS | Incomplete
|Jan 27| Create Js to grab proper data from API. Link data to html elements and get search section functioning. | Incomplete
|Jan 28| Create 'saved list' for user add JS functions: button, rating, checkoff,random generator. | Incomplete
|Jan 29| have all MVPs completed by end of the day | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix

 ![Priority Matrix](https://github.com/ghudachek/Restaurant-Generator/blob/main/Priority%20Matrix.png)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding JS to grab data from API | H | 1hrs| 3.5hrs | 3.5hrs |
| Create HTML boiler| H | 0.5hrs| 2.5hrs | 2.5hrs |
| Link JS data to search button, and create search output (JS to HTML) | H | 3hrs| 2.5hrs | 2.5hrs |
| Create "add" button(linked to restaurants) to  add to saved list | H | 2hrs| 2.5hrs | 2.5hrs |
| Create rating section and check-off boxes too saved list| H | 2hrs| 2.5hrs | 2.5hrs |
| Create random restaurant generator button | H | 2hrs| 2.5hrs | 2.5hrs |
| Add flexbox CSS to saved list and main search fields of webpage | H | 3hrs| 2.5hrs | 2.5hrs |
| Create MediaQuery to move saved list to a side menu option | H | 3hrs| 2.5hrs | 2.5hrs |
| Advance CSS to add style | H | 3hrs| 2.5hrs | 2.5hrs |
|Create map: add from API| H | 2hrs| 2.5hrs | 2.5hrs |
|get map to show listed restaurants on it | H | 3hrs| 2.5hrs | 2.5hrs |
|Have map toggle per user preference(hide unless clicked on) | H | 1.5hrs| 2.5hrs | 2.5hrs |
| Total | H | 26hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
