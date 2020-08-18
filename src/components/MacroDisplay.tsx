import React from "react";
import generateMacros from "../utils/macros";

const MacroDisplay = (props: { calories: number }) => {
  let myMacros = generateMacros(props.calories);

  return (
    <div className="macros">
      <br />
      This means your daily caloric intake{" "}
      <strong>should be no higher than</strong> {myMacros.calories}. This makes
      your macros look like: <br />
      Carbs: {myMacros.carbs} grams <br />
      Protein: {myMacros.proteins} grams <br />
      Fats: {myMacros.fats} grams
    </div>
  );
};

export default MacroDisplay;
