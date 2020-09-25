import React from 'react';
import './App.css';
import TextField from './TextField';
import ClickHandler from './ClickHandler';


function App() {

  /** state hooks */
  const [count, increaseCount] = React.useState(0);
  const [chars, changeChars] = React.useState("");

  /** used to increase count after an onClick has been triggered */
  const handleClick = React.useCallback(() => {
    increaseCount(c => c+1);
  }, [count])

  /** used to add input characters to chars after onChange has been triggered */
  const handleChange = React.useCallback(
    function (e) {
      changeChars(e.target.value);
    }, [changeChars]
  );
  
  return (
    <>
      <ClickHandler onClick={handleClick} count={count}></ClickHandler>
      <TextField onChange={handleChange}></TextField>
      <h2>{chars}</h2>
    </>
  );
}

export default App;
