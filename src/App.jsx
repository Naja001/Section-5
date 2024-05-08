import { useState } from "react";
import Header from "./Components/Header";
import InputTable from "./Components/InputTable";
import Result from "./Components/Result";
function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 10000,
    expectedReturn: 5,
    duration: 6,
  });

  const isValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
      
    });
  }

  return (
    <div >
      <Header />
      <InputTable onChange= {handleChange} userInput={userInput}/>
      {isValid ? <Result input={userInput}/>  : <p>Please enter a value grater then 0</p>}
     
    </div>
  );
}

export default App;
