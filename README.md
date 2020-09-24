# Random Cocktail Generator

## Project Description

This application is meant to inspire users with new cocktail recipes that they normally wouldn't make at home- especially those tired of drinking the same beer or wine during virtual happy hours. With a click of a button, random cocktail recipes will be generated with ingredients and instructions needed to mix a handcrafted cocktail in the comfort of the user's home.

## API and Data Sample

API Link: https://www.thecocktaildb.com/api.php

API Snippet:
```
{
drinks: [
{
idDrink: "12452",
strDrink: "Victory Collins",
strDrinkAlternate: null,
strDrinkES: null,
strDrinkDE: null,
strDrinkFR: null,
strDrinkZH-HANS: null,
strDrinkZH-HANT: null,
strTags: null,
strVideo: null,
strCategory: "Ordinary Drink",
strIBA: null,
strAlcoholic: "Alcoholic",
strGlass: "Collins glass",
strInstructions: "Shake all ingredients (except orange slice) with ice and strain into a collins glass over ice cubes. Add the slice of orange and serve.",
strInstructionsES: null,
strInstructionsDE: "Alle Zutaten (außer Orangenscheibe) mit Eis schütteln und in ein Collins-Glas über Eiswürfel abseihen. Die Orangenscheibe dazugeben und servieren.",
strInstructionsFR: null,
strInstructionsZH-HANS: null,
strInstructionsZH-HANT: null,
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/lx0lvs1492976619.jpg",
strIngredient1: "Vodka",
strIngredient2: "Lemon juice",
strIngredient3: "Grape juice",
strIngredient4: "Powdered sugar",
strIngredient5: "Orange",
strIngredient6: null,
strIngredient7: null,
strIngredient8: null,
strIngredient9: null,
strIngredient10: null,
strIngredient11: null,
strIngredient12: null,
strIngredient13: null,
strIngredient14: null,
strIngredient15: null,
strMeasure1: "1 1/2 oz ",
strMeasure2: "3 oz ",
strMeasure3: "3 oz unsweetened ",
strMeasure4: "1 tsp ",
strMeasure5: "1 slice ",
strMeasure6: null,
strMeasure7: null,
strMeasure8: null,
strMeasure9: null,
strMeasure10: null,
strMeasure11: null,
strMeasure12: null,
strMeasure13: null,
strMeasure14: null,
strMeasure15: null,
strCreativeCommonsConfirmed: "No",
dateModified: "2017-04-23 20:43:39"
}
]
}
```

## Wireframes

[https://wireframe.cc/SPpcwD]


#### MVP 

- Access an external api 
- Render random data on page every time a event listener is activated
- Structure information within flexbox
- Infuse at least one animation

#### PostMVP  

- Add a second API that has the option to look up a specific cocktail if the user already has one in mind.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Project Approval/Begin Core Application Structure | Complete
|Sept 22| Complete Core Application Structure (HTML, CSS, JS) | Complete
|Sept 23| Complete MVP | Complete
|Sept 24| Styling | Complete
|Sept 25| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://lh3.googleusercontent.com/0diT2z8_eyp0PLiBq-yEdC2tweSSAdTrpzP22cKoZjlX2lS9dDr_hzpoZ_0_zyo7lOCffuWEmkbszdnsNf4HjWAj_OH9vo0tufIfJ-zS2etAvOVEDVUGkACm-bDGvvioRG45nL8Mjc7Wd6j1ktwS6abHcaHaO_mFckqn9kAHyJx4TJEVTorfupWsw-Qpv1zM9y3oDfaW1S9sRyTkhSjEqMcDg-jEs4acMmmitxcwvw9JYbTBTpbq6HPL5yRYsi3hPkO8i088qfLD6UDgE-PLrOEjuTcUKBwcpGJT0o-6E3LbYWXuFRCabQqHkdwc3cOfOyFS_37AcSIPytjoVyqIqexavE5VH_eztP6k56kcC3rfH4uB_5vqx1d4lcqKsEy7JAfOfr9RmASLEm9HPcwBxp-tOV_kicvOiOfln2EHfZroAHxplLo8qBZoQ7RxKPycvp7_uemCMeOoTwS_C_ZW1XrtsNjyZMPqfp-JvPHmSBHYsiOZded0h-2gaBzpvzgMHwB3BW87q1lpgFa16_RbZlZCbD5J1aybq1hpg6ixVpzClWlrvFOU7aLVHuOtcR3fumu3eijQObdw9TJeCQaheJ-V2KFX3Cs3kwsJEfqICzwhbWsrPhi1HvBIfSCY16smnrrHaDvHwj1BK0r8WpA-Fdlg4FspOEQI8kMCi0K1TVg449ezVTdtR0PeZLbAAg=w855-h800-no?authuser=0)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Build out HTML Foundation | M | 2 hrs| 30 mins | 30 mins |
| Access API & Link It Within JS | H | 2 hrs| 30 mins | 30 mins |
| Pull Data From API and Append to HTML w/ DOM | H | 3.5 hrs| 1.5 hrs | 1.5 hrs |
| Add Event Listener for Button | M | 1.5 hrs| 30 mins | 30 mins |
| Remove Existing Data and Replace with New Data once Requested through Button | M | 10 mins | 30 mins | 30 mins |
| Debugging API Data | M | 3 hrs| 2 hrs | 2 hrs |
| Structure Data/Webpage with Flexbox | H | 3.5 hrs| 3.5 hrs | 3.5 hrs |
| Build Out Basic CSS Structure | L | 3 hrs| 2 hrs | 2 hrs |
| Create Breakpoint for Tablet & Mobile | H | 3 hrs| 30 mins | 30 mins |
| Debugging Breakpoint| H | 3 hrs| 1.5 hr | 1.5 hr |
| Build In Animation | L | 2 hrs| 1 hr | 1 hr |
| Build Out Advanced Styling in CSS | L | 3 hrs| 3 hrs | 3 hrs |
| Post MVP | L | NA | 6 hrs | 6 hrs |
| Total | H | 32 hrs| 23 hrs | 23 hrs |

## Code Snippet

I'm proud of the conditional statement that I wrapped around the execution of the function because this was the first time I didn't need to find a similar solution from a past lesson or online to resolve my problem.

```
if (recipe.drinks[0].strAlcoholic === "Alcoholic") {

      ...

      } else {
      return getDrinkInfo()
    }
```

## Change Log

My only change from the original wireframe was the addition of the footer to link to my post MVP data.