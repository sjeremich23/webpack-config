import "./sass/index.scss";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4
};

const elvenGuantletRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 1
};

console.log(elvenShieldRecipe);
console.log(elvenGuantletRecipe);
