import Macros from "../classes/Macros";

const fatCalories = 9,
  carbCalories = 4,
  proteinCalories = 4,
  carbPercentage = 0.05,
  fatPercentage = 0.7,
  proteinPercentage = 0.25;

export const generateMacros = (cals: number): Macros => ({
  carbs: Math.round((carbPercentage * cals) / carbCalories),
  fats: Math.round((fatPercentage * cals) / fatCalories),
  protein: Math.round((proteinPercentage * cals) / proteinCalories),
  calories: cals,
});

export default generateMacros;
