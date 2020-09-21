

async function getDrinkInfo() {
  try {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    const response = await axios.get(url);
    const recipe = response.data
    console.log(recipe)

    let div = document.querySelector("#drink-recipes")

    const listedTitle = document.createElement('p')
    let drinkTitle = recipe.drinks[0].strDrink
    listedTitle.textContent = `Drink: ${drinkTitle}`
    div.append(listedTitle)

    const img = document.createElement('img')
    img.src = recipe.drinks[0].strDrinkThumb
    div.append(img)

    const ingredientsTitle = document.createElement('p')
    ingredientsTitle.textContent = `Ingredients:`
    div.append(ingredientsTitle)

    const ingredientsLIFirst = document.createElement('li')
    let ingredientsFirst = recipe.drinks[0].strIngredient1
    let measurementsFirst = recipe.drinks[0].strMeasure1
    ingredientsLIFirst.textContent = `${ingredientsFirst}: ${measurementsFirst}`
    ingredientsTitle.append(ingredientsLIFirst)

    const ingredientsLISecond = document.createElement('li')
    let ingredientsSecond = recipe.drinks[0].strIngredient2
    let measurementsSecond = recipe.drinks[0].strMeasure2
    ingredientsLISecond.textContent = `${ingredientsSecond}: ${measurementsSecond}`
    ingredientsTitle.append(ingredientsLISecond)

    const ingredientsLIThird = document.createElement('li')
    let ingredientsThird = recipe.drinks[0].strIngredient3
    let measurementsThird = recipe.drinks[0].strMeasure3
    ingredientsLIThird.textContent = `${ingredientsThird}: ${measurementsThird}`
    ingredientsTitle.append(ingredientsLIThird)

    const ingredientsLIFourth = document.createElement('li')
    let ingredientsFourth = recipe.drinks[0].strIngredient4
    let measurementsFourth = recipe.drinks[0].strMeasure4
    ingredientsLIFourth.textContent = `${ingredientsFourth}: ${measurementsFourth}`
    ingredientsTitle.append(ingredientsLIFourth)

    const ingredientsLIFifth = document.createElement('li')
    let ingredientsFifth = recipe.drinks[0].strIngredient5
    let measurementsFifth = recipe.drinks[0].strMeasure5
    ingredientsLIFifth.textContent = `${ingredientsFifth}: ${measurementsFifth}`
    ingredientsTitle.append(ingredientsLIFifth)

    const ingredientsLISixth = document.createElement('li')
    let ingredientsSixth = recipe.drinks[0].strIngredient6
    let measurementsSixth = recipe.drinks[0].strMeasure6
    ingredientsLISixth.textContent = `${ingredientsSixth}: ${measurementsSixth}`
    ingredientsTitle.append(ingredientsLISixth)

    const ingredientsLISeventh = document.createElement('li')
    let ingredientsSeventh = recipe.drinks[0].strIngredient7
    let measurementsSeventh = recipe.drinks[0].strMeasure7
    ingredientsLISeventh.textContent = `${ingredientsSeventh}: ${measurementsSeventh}`
    ingredientsTitle.append(ingredientsLISeventh)

    const ingredientsLIEighth = document.createElement('li')
    let ingredientsEighth = recipe.drinks[0].strIngredient8
    let measurementsEighth = recipe.drinks[0].strMeasure8
    ingredientsLIEighth.textContent = `${ingredientsEighth}: ${measurementsEighth}`
    ingredientsTitle.append(ingredientsLIEighth)
    
    const ingredientsLINinth = document.createElement('li')
    let ingredientsNinth = recipe.drinks[0].strIngredient9
    let measurementsNinth = recipe.drinks[0].strMeasure9
    ingredientsLINinth.textContent = `${ingredientsNinth}: ${measurementsNinth}`
    ingredientsTitle.append(ingredientsLINinth)

    const ingredientsLITenth = document.createElement('li')
    let ingredientsTenth = recipe.drinks[0].strIngredient10
    let measurementsTenth = recipe.drinks[0].strMeasure10
    ingredientsLITenth.textContent = `${ingredientsTenth}: ${measurementsTenth}`
    ingredientsTitle.append(ingredientsLITenth)
    
    const ingredientsLIEleventh = document.createElement('li')
    let ingredientsEleventh = recipe.drinks[0].strIngredient11
    let measurementsEleventh = recipe.drinks[0].strMeasure11
    ingredientsLIEleventh.textContent = `${ingredientsEleventh}: ${measurementsEleventh}`
    ingredientsTitle.append(ingredientsLIEleventh)

    const ingredientsLITwelth = document.createElement('li')
    let ingredientsTwelth = recipe.drinks[0].strIngredient12
    let measurementsTwelth = recipe.drinks[0].strMeasure12
    ingredientsLITwelth.textContent = `${ingredientsTwelth}: ${measurementsTwelth}`
    ingredientsTitle.append(ingredientsLITwelth)

    const ingredientsLIThirteen = document.createElement('li')
    let ingredientsThirteen = recipe.drinks[0].strIngredient13
    let measurementsThirteen = recipe.drinks[0].strMeasure13
    ingredientsLIThirteen.textContent = `${ingredientsThirteen}: ${measurementsThirteen}`
    ingredientsTitle.append(ingredientsLIThirteen)

    const ingredientsLIFourteen = document.createElement('li')
    let ingredientsFourteen = recipe.drinks[0].strIngredient14
    let measurementsFourteen = recipe.drinks[0].strMeasure14
    ingredientsLIFourteen.textContent = `${ingredientsFourteen}: ${measurementsFourteen}`
    ingredientsTitle.append(ingredientsLIFourteen)

    const ingredientsLIFifteen = document.createElement('li')
    let ingredientsFifteen = recipe.drinks[0].strIngredient15
    let measurementsFifteen = recipe.drinks[0].strMeasure15
    ingredientsLIFifteen.textContent = `${ingredientsFifteen}: ${measurementsFifteen}`
    ingredientsTitle.append(ingredientsLIFifteen)

    const instructionsSection = document.createElement('p')
    let instructions = recipe.drinks[0].strInstructions
    instructionsSection.textContent = `Instructions: ${instructions}`
    div.append(instructionsSection)
  }
  catch(error) {
    console.log(`Error: ${error}`)
  }
  finally {
    console.log("Request fufilled.")
  }
}
getDrinkInfo()

  const button = document.querySelector("#button")
  button.addEventListener("click", getDrinkInfo)

function replaceDrinkRecipe() {
  
}