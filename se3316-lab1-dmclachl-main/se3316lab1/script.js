//adding JavaScript file for backend programming

const countriesJSON = [                      //JSON data structure for searching, name and currencies properties
    { name: "Singapore", currency: "SGD" },
    { name: "Slovakia", currency: "EUR" },
    { name: "Slovenia", currency: "EUR" },
    { name: "Solomon Islands", currency: "SBD" },
    { name: "Somalia", currency: "SOS" },
    { name: "South Africa", currency: "ZAR" },
    { name: "South Sudan", currency: "SSP" },
    { name: "Spain", currency: "EUR" },
    { name: "Sri Lanka", currency: "LKR" },
    { name: "Sudan", currency: "SDG" },
    { name: "Suriname", currency: "SRD" },
    { name: "Sweden", currency: "SEK" },
    { name: "Switzerland", currency: "CHF" },
    { name: "Syrian Arab Republic", currency: "SYP" },
    { name: "Tajikistan", currency: "TJS" },
    { name: "Tanzania", currency: "TZS" },
    { name: "Thailand", currency: "THB" },
    { name: "Timor-Leste", currency: "USD" },
    { name: "Togo", currency: "XOF" },
    { name: "Tonga", currency: "TOP" },
  ];
  
  
const countryTextInput = document.getElementById("searchByCountryName"); //gets the input from text box for the countries

countryTextInput.addEventListener("input", function() { //event listener for the currency text input
  const searchCountryValue = countryTextInput.value;    //temporary variable to hold value with restrictions
  const stopNum = searchCountryValue.replace(/[0-9]/g, ''); //replace function refers to all numbers and replaces them with an empty character
  const maximumCharacterInput = stopNum.slice(0, 20); //prevents more than 20 characters from being entered
  countryTextInput.value = maximumCharacterInput; //set the text input for countries to max char and no numbers input

});


const currencyTextInput = document.getElementById("searchByCurrency");

currencyTextInput.addEventListener("input", function() { //event listener for the currency text input
  let searchCurrencyValue = currencyTextInput.value; //temporary variable to hold value with restrictions

  searchCurrencyValue = searchCurrencyValue.toUpperCase(); //function toUpperCase automatically changes inputted text to uppercase
  const stopChar = searchCurrencyValue.replace(/[^A-Z]/g, ''); //replace prevents any characters not uppercase letters from being inputted
  const maxCharInput = stopChar.slice(0, 3); //characters are prevented from being inputted over three letter
  currencyTextInput.value = maxCharInput; //sets the text input for currency to max amount of characters and no numbers

});

  
  function searchCountriesByName() { //function that searches countries by name 

  
    const countryInputBox = document.getElementById("searchByCountryName"); //defines variable to get value of text input
    const countrySearchQuery = countryInputBox.value.toUpperCase();//to upper case used to make search not case sensitive
  
    const searchResults = countriesJSON.filter(country =>
      country.name.toUpperCase().includes(countrySearchQuery)
    ); //variable to hold search result, json is searched by name
  
    displayResults(searchResults); //function call passing in search results 
  }
  
  function searchCountriesByCurrency() {

  
    const currencyInputBox = document.getElementById("searchByCurrency"); //variable to get input value
    const currencySearchQuery = currencyInputBox.value.toUpperCase();//to upper case for case sensitivity
  
    const searchResults = countriesJSON.filter(country =>
      country.currency === currencySearchQuery //gets results that are equal to what is typed in
    );
  
    displayResults(searchResults);
  }
  
  function displayResults(results) { //function definition for displaying alert pop up
    
    const resultAlertMessage = results.slice(0, 5).map(country => 
      `Country: ${country.name}, Currency: ${country.currency}`
    ).join("\n");
    //for up to 5 results get country name and currency
  
    alert(resultAlertMessage); //alert displays alert function on webpage with results
  }
  
   
  document.getElementById("countryNameSearchButton").addEventListener("click", searchCountriesByName); // add event listeners for searching upon button click
  document.getElementById("currencySearchButton").addEventListener("click", searchCountriesByCurrency);
  


