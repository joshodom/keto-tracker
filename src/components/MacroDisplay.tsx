import React from "react";
import generateMacros from "../utils/macros";
import Macros from "../classes/Macros";

let myMacros: Macros;
const sendToDB = () => {
  myMacros.calories = myMacros.calories as number;
  console.log(myMacros);
  console.log("calories type: " + typeof myMacros.calories);
};
const MacroDisplay = (props: { calories: number }) => {
  myMacros = generateMacros(props.calories);

  return (
    <div className="macros">
      <br />
      This means your daily caloric intake{" "}
      <strong>
        <span id="makeRed">should be no higher than</span>
      </strong>
      {myMacros.calories}. <br />
      This makes your macros look like: <br />
      Carbs: {myMacros.carbs} grams <br />
      Protein: {myMacros.protein} grams <br />
      Fats: {myMacros.fats} grams <br />
      <button type="submit" onClick={sendToDB}>
        Submit
      </button>
    </div>
  );
};

export default MacroDisplay;
