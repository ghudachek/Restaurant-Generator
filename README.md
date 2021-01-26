# Project Overview

## Restaurant Generator

[Restaurant Generator](https://github.com/ghudachek/Restaurant-Generator)

## Project Description

Will grab restaurants in a given area using the API Documenu by giving a zip-code. Restaurants will show name, website link,location, and money rating scale (from $-$$$$). Listed restaurants can be saved to your own list and randomized to generate "where you will eat tonight?" for those who can never choose!

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

* [Desktop WireFrame](https://whimsical.com/restaurant-generator-site-Vo44rwy9KRcjKoviKp8tXA)
* [Mobile WireFrame](https://whimsical.com/smartphone-restaurant-generator-layout-CJPYpwyYah4d8dX58aL7aG)

#### MVP 

- Gather Restaurant title, location, website, and cost rating or star rating(if given) from API chosen(Docmenu).
- Allow users to search for Restaurants in their area given a zip-code.
- Incorporate restaurant data listed above into a clean readable design on webpage(CSS/flexbox).
- Give users the option to create their own seperate list of "saved" or "liked restaurants.
- Give users the ability to checkoff from their list and rate the Restaurant on their list.
- Give users the ability to generate a randomly picked restaurant from their liked list as a way to choose where they may eat next.

#### PostMVP  
- Use a map API to generate a map of user chosen location with list of restaurants on it.
- Give users the ability to add other restaurants to their list (even if they weren't listed on the search?).
- Have a way for users to save their list and data they add to it.
## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Jan 26| Project Approval / Psuedocode layout of html,css,JS | Incomplete
|Jan 27| Create Js to grab proper data from API. Link data to html elements and get search section functioning. | Incomplete
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
| Create random restaurant generator button | H | 2hrs| hrs | hrs |
| Add flexbox CSS to saved list and main search fields of webpage | H | 3hrs| hrs | hrs |
| Create MediaQuery to move saved list to a side menu option | H | 3hrs| hrs | hrs |
| Advance CSS to add style | H | 3hrs| hrs | hrs |
| Create map: add from API| H | 3hrs| hrs | hrs |
| Get map to show listed restaurants on it | H | 3hrs| hrs | hrs |
| Have map toggle per user preference(hide unless clicked on) | H | 1.5hrs| hrs | hrs |
| Total | H | 29hrs| hrs | hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
