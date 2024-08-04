import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
// import React,{ useState } from "react";

function App() {

  const [isDarkMode,setIsDarkMode] = useState(false)
  function handleonDarkMode(){
      setIsDarkMode(!isDarkMode)
  }
  // this will be used for the Dark Mode Toggle feature
  // replace 'false' with a state variable that can be toggled between true and false
  const appClass =isDarkMode ? "App dark" : "App light"
 
  return (

    
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={ handleonDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;