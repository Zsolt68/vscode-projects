# Weather-Dashboard - Testing

-----

## Contents

* [Introduction](#introduction)
* [Automated Validation](#automated-checks-and-validation)
    * [W3C Validator](#w3c-validator)
    * [Lighthouse](#lighthouse)
    * [JSHint](#jshint)
    * [Accessibility Testing](#accessibility-testing)
* [Manual Testing](#manual-testing)
    * [Testing User Stories](#testing-user-stories)
    * [Full Testing](#full-testing)
* [Bugs](#bugs)
    * [Solved Bugs](#solved-bugs)
    * [Known Bugs](#known-bugs)

-----

## Introduction

Here, I developed a testing plan to make sure that the weather-dashboard or website was functioning as intended. 

I ran my code through all validation and accessibility checkers noted below and have included screenshots of the results in this document. I also manually checked every feature of the site to ensure that it was working as intended and have included the results of this testing in this document.

-----

## Automated Checks and Validation

This automated testing section contains all testing that has been run through a program to produce validation and performance insights.

### W3C Validator

[W3C](https://validator.w3.org/#validate_by_input) was used to validate the HTML and CSS for the site via direct text input. Result > Document checking completed. No errors or warnings to show.

### Lighthouse

The Lighthouse tool within the Chrome Developer Tools has been used to test performance, best practices, accessibility, and SEO. Desktop and mobile tests have been run for each page.

| | Performance | Accessibility | Best Practice | SEO |
| :---: | :---: | :---: | :---: | :---: |
| Desktop | 98 | 100 | 100 | 100 |
| Mobile | 94 | 100 | 100 | 100 |

### JSHint

[JSHint](https://jshint.com/) was used to test the JavaScript file in this project.

The JavaScript file tested through JSHint returned no errors or warnings when the 'ES6' option was selected.

## Manual Testing

### Testing User Goals

> * Search for a city and display the city's name and current temperature.

The weather dashboard is designed to be a simple way to search for a city name, then to display the city's temperature and 5-day weather forecast.

> * Be able to collect multiple/8 cities' searches and display them on the weather dashboard.

### Full Testing

Full testing was performed on the following devices:

* Laptop
  * HP Pavilion - 15

* Mobile
  * Samsung Galaxy S25+
 
 Desktop device tested the site using the following browsers:
 
 * Google Chrome
 * Mozilla Firefox
 * Opera
 * Microsoft Edge


   ## Bugs

### Solved Bugs

| # | Issue | Details | What was done | Fixed? |
| --- | --- | --- | --- | --- |
| 1 | Filepath issues between vscode and github deployment | Filepaths for styles and scripts were not working when deployed to github pages | Filepaths were updated to work with github deployment | __Yes__ |
| 2 | Inventory | Inventory items were not being removed when the game was reset | Added a function to remove all items from the inventory when the game is reset | __Yes__ |
| 3 | Duplicated endings | When the same ending was reached it would appear multiple times in the achievements modal | Add an if statement to check whether the ending has already been collected | __Yes__ |
| 4 | Dynamic background | Inclusion of dynamic backgrounds to the game container not working as expected | Feature was removed to allow for more time to work on other features and has been added to the future implementations section | __Removed__ |
| 5 | Typewriter effect | Typewriter effect for the game text nodes not working due to inclusion of HTML within the text nodes | Typewriter effect was removed to allow for more time to work on other features and has been added to the future implementations section | __Removed__ |


### Known Bugs

There are currently no known bugs in this version of the site.

<sup><sub>[*Back to top*](#contents)</sup></sub>

-----
