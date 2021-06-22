import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Footer from './Footer';
// import CocktailResults from './CocktailResults';

// PSEUDO JUNE 21
// make some components 
// start basic styling
// create a pull request

// first make component for cocktailResults




// add new info from second api info to new state
// create new comp
// that comp will be fed info from state
// (still running api call in App.JS)
// on click get api data (conditional statement if state has x show y)
// show item with z index and position fixed
// on click, close 'pop up'



// PSEUDO
// make repo on github
// Use axios to connect to API
// filter cocktails by ingredient (eventually multiple)

// allow user input with drop down menu for multiple ingredients
// use map to create new array of results 
// display map on page using grid

//STRETCH 
// allow user to save recipe and/or ingredients with firebase 

//MORE PSEUDO 
  // ADD EVERYSTEP
  // PUT NOTES EVERYWHERE




      // proper pseudo
// get api key (email sent)
// get endpoint (in progress)
// filter by ingredient (i in params)
// 


// create form to accept user input from drop down menu with ingredients
// change what is in axios with regular function, and pass in variable colleted from form.


// try 2nd api call in cocktailComp if time permits! 



function App() {

  const [drink, setDrink] = useState([]);
  // const [isLoading, setIsLoading] = useState(true)
  const [firstChoice, setFirstChoice] = useState('lemonade');
  const [cocktailDetails, setCocktailDetails] = useState([]);
  // set default

  const getData = ((event) => {
    event.preventDefault();

    console.log(`my app has mounted`)
    
     axios({
      // url: 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
      url: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php',
      // url: 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php',
      // considering separating api, key, and filter
      // maybe baseUrl for url, as key as variable, and figure out filter?
      // need to check api urls
      method: 'GET',
      // dataResponse: 'json',
      // above may not be required. check later
      params: {
        // key: `523532`,
        //  key: `1`,
        format: 'json',
        i: firstChoice
        // i: `11007`

        // i allows to search by ingredient if filter is already applied
        
      }
    }).then( (results) =>{
      console.log(results);
      console.log(results.data.drinks)
      // console.log(results.data.drinks[0].idDrink)
      setDrink(results.data.drinks)
      // setIsLoading(false);

    })
  })

  const userChoice = (event) => {
    setFirstChoice(event.target.value)
    console.log(event.target.value)
  }

  console.log(userChoice);
  console.log(firstChoice);





  const moreInfo = (event) => {
    event.preventDefault();
    console.log(event.target.id)
    const imgId = event.target.id
      
    axios({
      url: 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php',
      method: 'GET',
      // dataResponse: 'json',
      // above may not be required. check later
      params: {
        // key: `523532`,
        format: 'json',
        i: imgId
    // ID ABOVE IS IS SPECIFIC TO A DRINK ()

        // i allows to search by ingredient if filter is already applied

      }
    }).then((results) => {
      console.log(results);
    console.log(results.data.drinks)
    setCocktailDetails(results.data.drinks)
      // setDrink(results)
      // setIsLoading(false);

    })
  }

  // const dataOnClick = () => {
  //   console.log()
  //   setCocktailDetails()
  // }

  //  const userChoice = (event) => {
  //   setFirstChoice(event.target.value)
  //   console.log(event.target.value)
  // }


  return (
    <div className="App">
      <header className="wrapper">
        <h1>Hello world. Can I buy you a drink?</h1>
        <form onSubmit={getData}>
            {/* create function and add onSubmit={newFunciton} to form */}
          {/* <select name="firstIngredient" id="firstIngredient"> */}
          <select onChange={userChoice}>
            <option value='gin'>Gin</option>
            <option value='scotch'>Scotch</option>
            <option value='amaretto'>Amaretto</option>
            <option value='tequila'>Tequila</option>
            <option value='vodka'>Vodka</option>
          </select>
          <button type="submit">The cause and solution, to all of life's problems</button>
        </form>
      </header>

    <section className="wrapper">
      <ul className="drink-list">
        {
          drink.map( (drinkInfo) => {
            return (
              <li onClick={moreInfo} key={drinkInfo.idDrink}>
                <h2>{drinkInfo.strDrink}</h2>
                <img id={drinkInfo.idDrink} src={drinkInfo.strDrinkThumb} alt="{drinkInfo.strDrink}"></img>
                {/* will have to review alt tag and accessibility standards  */}
              </li>
            )
          })
        }
      </ul>
    </section>
    <ul>
      {
        cocktailDetails.map( (cocktailInfo) => {
          // not an array! try a for in loop! maybe? idk
          return (

            // need error handling for strIngredients
            // if strIngredients = null, don't display?
            // how does that work????
            <div className="wrapper overlay">
              <li>
                <h3>{cocktailInfo.strDrink}</h3>
                <p>{cocktailInfo.strInstructions}</p>
                <p>{cocktailInfo.strMeasure1} {cocktailInfo.strIngredient1}</p>
                <p>{cocktailInfo.strMeasure2} {cocktailInfo.strIngredient2}</p>
                <p>{cocktailInfo.strMeasure3} {cocktailInfo.strIngredient3}</p>
                <p>{cocktailInfo.strMeasure4} {cocktailInfo.strIngredient4}</p>
                <p>{cocktailInfo.strMeasure5} {cocktailInfo.strIngredient5}</p>
                <p>{cocktailInfo.strMeasure6} {cocktailInfo.strIngredient6}</p>
                <p>{cocktailInfo.strMeasure7} {cocktailInfo.strIngredient7}</p>
                <p>{cocktailInfo.strMeasure8} {cocktailInfo.strIngredient8}</p>
                <p>{cocktailInfo.strMeasure9} {cocktailInfo.strIngredient9}</p>
                <p>{cocktailInfo.strMeasure10} {cocktailInfo.strIngredient10}</p>
                <p>{cocktailInfo.strMeasure11} {cocktailInfo.strIngredient11}</p>
                <p>{cocktailInfo.strMeasure12} {cocktailInfo.strIngredient12}</p>
                <p>{cocktailInfo.strMeasure13} {cocktailInfo.strIngredient13}</p>
                <p>{cocktailInfo.strMeasure14} {cocktailInfo.strIngredient14}</p>
                <p>{cocktailInfo.strMeasure15} {cocktailInfo.strIngredient15}</p>
                <p>Serve in: {cocktailInfo.strGlass}</p>
                <img src={cocktailInfo.strDrinkThumb} alt="change this later"></img>
              </li>
            </div>
          )
        })
      }
    </ul>
    <Footer />
    </div>
  );
}

export default App;




                            // WOAH MORE PSEDUO CODE

// Here is my muddled understanding of what I have to do
// sort by ingredient and display title and image(at least) on page
// this is done by using filter in my axios API call
// this will give me the id of the drink, which will allow me to search and get information I need!
// how to display array of drinks filtered by ingredient 

// axios({
// url: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php',
//   // considering separating api, key, and filter
//   // maybe baseUrl for url, as key as variable, and figure out filter?
//   method: 'GET',
//     // dataResponse: 'json',
//     // above may not be required. check later
//     params: {
//   format: 'json',
//     i: 'gin',z
//         // i allows to search by ingredient if filter is already applied
        
//       }
//     }).then((results) => {
//       console.log(results);
//       console.log(results.data.drinks)
//       console.log(results.data.drinks[0])
//       console.log(results.data.drinks[0].idDrink)
// Above will display array of drinks, and then allow me to target idDrink, which I will then use to search by id
//       // setDrink(results)
//       // setIsLoading(false);
//     })

// allow user to click on photo of drink
// redirect(?) or display information of drink on page
// this will possibly require another api call?
// how to display drink info:

// axios({
//   url: 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php',
//   // considering separating api, key, and filter
//   // maybe baseUrl for url, as key as variable, and figure out filter?

//   method: 'GET',
//   // dataResponse: 'json',
//   // above may not be required. check later
//   params: {
//     // key: `523532`,
//     format: 'json',
//     i: `11007`
// ID ABOVE IS IS SPECIFIC TO A DRINK ()

//     // i allows to search by ingredient if filter is already applied

//   }
// }).then((results) => {
//   console.log(results);
// console.log(results.data.drinks)
//   // setDrink(results)
//   // setIsLoading(false);

// })

// FULL LIST OF INGREDIENTS 
// {

// "drinks": [
//   {
//     "strIngredient1": "Light rum"
//   },
//   {
//     "strIngredient1": "Gin"
//   },
//   {
//     "strIngredient1": "Dark rum"
//   },
//   {
//     "strIngredient1": "Sweet Vermouth"
//   },
//   {
//     "strIngredient1": "Scotch"
//   },
//   {
//     "strIngredient1": "Triple sec"
//   },
//   {
//     "strIngredient1": "Southern Comfort"
//   },
//   {
//     "strIngredient1": "Brandy"
//   },
//   {
//     "strIngredient1": "Blended whiskey"
//   },
//   {
//     "strIngredient1": "Dry Vermouth"
//   },
//   {
//     "strIngredient1": "Amaretto"
//   },
//   {
//     "strIngredient1": "Bourbon"
//   },
//   {
//     "strIngredient1": "Tequila"
//   },
//   {
//     "strIngredient1": "Vodka"
//   },
//   {
//     "strIngredient1": "Añejo rum"
//   },
//   {
//     "strIngredient1": "Whiskey"
//   },