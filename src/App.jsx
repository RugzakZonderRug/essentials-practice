import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Table from "./components/Table.jsx";

import { calculateInvestmentResults, formatter } from "./util/investment.js";

const defaultInvestmentInputs = {
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [investmentInput, setInvestmentInput] = useState(
    defaultInvestmentInputs
  );
  const [investmentResults, setInvestmentResults] = useState(
    calculateInvestmentResults(investmentInput)
  );

  function handleInputChange(event, inputID) {
    let newVar = Number(event.target.value);

    setInvestmentInput((prevData) => {
      const updatedData = { ...prevData, [inputID]: newVar };
      const updatedResults = calculateInvestmentResults(updatedData);

      setInvestmentResults(updatedResults);

      return updatedData;
    });
  }

  return (
    <>
      <Header />
      <div id="user-input">
        <div className="input-group">
          <UserInput
            label="Initial investment"
            inputID="initialInvestment"
            inputValue={investmentInput.initialInvestment}
            inputChange={handleInputChange}
          />
          <UserInput
            label="Annual investment"
            inputID="annualInvestment"
            inputValue={investmentInput.annualInvestment}
            inputChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <UserInput
            label="Expected return"
            inputID="expectedReturn"
            inputValue={investmentInput.expectedReturn}
            inputChange={handleInputChange}
          />
          <UserInput
            label="Duration"
            inputID="duration"
            inputValue={investmentInput.duration}
            inputChange={handleInputChange}
          />
        </div>
      </div>
      <Table investmentResults={investmentResults} />
    </>
  );
}

export default App;
