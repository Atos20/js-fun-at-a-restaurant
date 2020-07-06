function nameMenuItem(menuItem) {
    return `Delicious ${menuItem}`;
}

function createMenuItem(name, price, type) {
   var menuItem = {
     name: name,
     price: price,
     type: type
   }
  return menuItem;
}

function addIngredients(ingredient, ingredientsList) {
  var doesExist = false;

  for (var i = 0; i < ingredientsList.length; i++){
    if (ingredientsList[i] === ingredient){
      doesExist = true
     }
   }
    if (doesExist === false){
     ingredientsList.push(ingredient)
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(regularPrice) {
  var discount = regularPrice * .10;
  return regularPrice - discount
}

function createRecipe(recipeTitle, ingredientsList, menuType) {
   var newRecipe = {
     title: recipeTitle,
     ingredients:ingredientsList,
     type: menuType
   }
   return newRecipe;

}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
