import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



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
// change what is in axios with regular function, and pass in variable colleted from form



function App() {

  const [drink, setDrink] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

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
        i: 'gin',
        // i: `11007`

        // i allows to search by ingredient if filter is already applied
        
      }
    }).then( (results) =>{
      // console.log(results);
      console.log(results.data.drinks)
      // console.log(results.data.drinks[0].idDrink)
      setDrink(results.data.drinks)
      setIsLoading(false);

    })
  }, [])



  return (
    <div className="App">
     <h1>Hello world. Can I buy you a drink?</h1>
    <ul>
      {
        drink.map((cocktail) => {
          return (
            <li key={cocktail.idDrink}>
              <h2>{cocktail.strDrink}</h2>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
              {/* will have to review alt tag and accessibility standards  */}
            </li>
          )
        })
      }
    </ul>



    {/* {
        isLoading ? <p>Just waiting</p> : <button onClick={console.log('QWHY')}>Does it say anything?</button>
    } */}
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

