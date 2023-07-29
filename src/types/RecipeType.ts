type stepType = {
  number: number;
  step: string;
};

type analyzedInstructionType = {
  name: string;
  steps: stepType[];
};

type extendedIngredientType = {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  meta: string[];
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  unit: string;
};

type RecipeType = {
  aggregateLikes: number;
  analyzedInstructions: analyzedInstructionType[];
  cheap: boolean;
  cookingMinutes: number;
  creditsText: string;
  cuisines: [];
  dairyFree: boolean;
  diets: [];
  dishTypes: [];
  extendedIngredients: extendedIngredientType[];
  gaps: string;
  glutenFree: boolean;
  healthScore: number;
  id: number;
  image: string;
  imageType: string;
  instructions: string;
  license: string;
  lowFodmap: boolean;
  occasions: string[];
  originalId: null;
  preparationMinutes: number;
  pricePerServing: number;
  readyInMinutes: number;
  servings: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  summary: string;
  sustainable: boolean;
  title: string;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  weightWatcherSmartPoints: number;
};

export default RecipeType;
