import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import Footer from './Footer';
// import CocktailResults from './CocktailResults';

//STRETCH 
// sort by multiple ingredients
// allow user to save recipe and/or ingredients with firebase 

function App() {

  const [drink, setDrink] = useState([]);
  const [firstChoice, setFirstChoice] = useState('gin');
  // set default choice to gin
  const [cocktailDetails, setCocktailDetails] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleDisplay = () => {
    console.log(open)
    setOpen(!open);
    console.log('?????? IS THERE ANYONE OUT THERE????')
  }
  
  


  const getData = ((event) => {
    event.preventDefault();

    // console.log(`my app has mounted`)

    // initial API call. displays drinks on to the page to choose from
    axios({
      url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
      // filter by ingredient
      method: 'GET',
      params: {
        format: 'json',
        i: firstChoice
        // i allows to search by ingredient if filter is already applied
        
      }
    }).then( (results) =>{
      console.log(results);
      console.log(results.data.drinks)
      setDrink(results.data.drinks)
    })
  })

  const userChoice = (event) => {
    setFirstChoice(event.target.value)
    console.log(event.target.value)
  }

  // console.log(userChoice);
  // console.log(firstChoice);

  const moreInfo = (event) => {
    event.preventDefault();
    console.log(event.target.id)
    const imgId = event.target.id
    

  // let testFunction = () => {
  //   moreInfo();
  //   toggleDisplay();
  // }
      
    // second api call. use drinkId on click to get recipe/information for drink
    axios({
      url: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
      // lookup by ID
      method: 'GET',
      params: {
        // key: `523532`,
        format: 'json',
        i: imgId
        //imgId collected on clicking on photo of drink
      }
    }).then((results) => {
    //   console.log(results);
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
        <h1>Cocktail Curator</h1>
        <p>Please choose from one of the options below:</p>
        <form className="form" onSubmit={getData}>
          <select onClick={userChoice}>
            <option value='gin'>Gin</option>
            <option value='tequila'>Tequila</option>
            <option value='vodka'>Vodka</option>
            <option value='scotch'>Scotch</option>
            <option value='bourbon'>Bourbon</option>
            <option value='blended_whiskey'>Blended Whiskey</option>
            <option value='rum'>Rum</option>
            <option value='amaretto'>Amaretto</option>
            <option value='sweet_vermouth'>Sweet Vermouth</option>
            <option value='dry_vermouth'>Dry Vermouth</option>
          </select>
          <button type="submit">The cause and solution, to all of life's problems</button>
        </form>
      </header>

    <section className="wrapper">
      <ul className="drink-list">
        {
          drink.map( (drinkInfo) => {
            return (
              <li onClick={(e) => {
                moreInfo(e);
                toggleDisplay();
              }} key={drinkInfo.idDrink}>
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
      { cocktailDetails.length === 1 ? (
            // need error handling for strIngredients
            // if strIngredients = null, don't display?
            // how does that work????
            // <div className="wrapper">
              <div className={ open ? "overlay active" : "overlay inactive"}>
                <li key={cocktailDetails[0].idDrink + "unqiuelol"} >
                  <h3>{cocktailDetails[0].strDrink}</h3>
                  <p>{cocktailDetails[0].strInstructions}</p>
                  <p>{cocktailDetails[0].strMeasure1} {cocktailDetails[0].strIngredient1}</p>
                  <p>{cocktailDetails[0].strMeasure2} {cocktailDetails[0].strIngredient2}</p>
                  <p>{cocktailDetails[0].strMeasure3} {cocktailDetails[0].strIngredient3}</p>
                  <p>{cocktailDetails[0].strMeasure4} {cocktailDetails[0].strIngredient4}</p>
                  <p>{cocktailDetails[0].strMeasure5} {cocktailDetails[0].strIngredient5}</p>
                  <p>{cocktailDetails[0].strMeasure6} {cocktailDetails[0].strIngredient6}</p>
                  <p>{cocktailDetails[0].strMeasure7} {cocktailDetails[0].strIngredient7}</p>
                  <p>{cocktailDetails[0].strMeasure8} {cocktailDetails[0].strIngredient8}</p>
                  <p>{cocktailDetails[0].strMeasure9} {cocktailDetails[0].strIngredient9}</p>
                  <p>{cocktailDetails[0].strMeasure10} {cocktailDetails[0].strIngredient10}</p>
                  <p>{cocktailDetails[0].strMeasure11} {cocktailDetails[0].strIngredient11}</p>
                  <p>{cocktailDetails[0].strMeasure12} {cocktailDetails[0].strIngredient12}</p>
                  <p>{cocktailDetails[0].strMeasure13} {cocktailDetails[0].strIngredient13}</p>
                  <p>{cocktailDetails[0].strMeasure14} {cocktailDetails[0].strIngredient14}</p>
                  <p>{cocktailDetails[0].strMeasure15} {cocktailDetails[0].strIngredient15}</p>
                  <p>Serve in: {cocktailDetails[0].strGlass}</p>
                  <button onClick={toggleDisplay}>Take me back</button>
                  <img src={cocktailDetails[0].strDrinkThumb} alt="change this later"></img>
                </li>
              </div> ) : <p>no!</p>
            // </div>
      }
    </ul>
    <Footer />
    </div>
  );
}

export default App;

// })

// FULL LIST OF INGREDIENTS 
// {

// "drinks": [
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
//     "strIngredient1": "Añejo rum"
//   },
//   {
//     "strIngredient1": "Whiskey"
//   },