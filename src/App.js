import './App.css';
import axios from 'axios';
import { useState } from 'react';
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


  const getData = ((event) => {
    event.preventDefault();

    // console.log(`my app has mounted`)

    // initial API call. displays drinks on to the page to choose from
     axios({
      url: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php',
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
      
    // second api call. use drinkId on click to get recipe/information for drink
    axios({
      url: 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php',
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
    // console.log(results.data.drinks)
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
          <select onChange={userChoice}>
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