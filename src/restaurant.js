
function createRestaurant(name) {
  var newRestaurant = {
    name: name,
    menus: { breakfast: [], lunch: [], dinner: []}
  }
  return newRestaurant
}

function addMenuItem(restaurant, menuItem) {
  var breakfastMenu = restaurant.menus.breakfast;
  var lunchMenu = restaurant.menus.lunch;
  var dinnerMenu = restaurant.menus.dinner;

    if (lunchMenu.length === 0 && menuItem.type === 'lunch'){
        lunchMenu.push(menuItem)
    }
    else if (breakfastMenu.length === 0 && menuItem.type === 'breakfast'){
        breakfastMenu.push(menuItem)
    } else if (dinnerMenu.length === 0 && menuItem.type === 'dinner'){
      dinnerMenu.push(menuItem)
    }
}

function removeMenuItem(restaurant, menuItem, itemType) {
console.log(restaurant.menus[itemType])
  if (restaurant.menus[itemType] !== undefined){
    for (var i = 0; i < restaurant.menus[itemType].length; i++){
      restaurant.menus[itemType].splice(i, 1)

      return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
    }
  }
  if (!restaurant.menus[itemType]){
      return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`

    }
  }

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
