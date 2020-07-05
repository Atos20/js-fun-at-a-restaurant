
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
//(n , i , a)//what uf the restaurant menu.types [] have more than one element
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


  //use of bracket notation
  //inside brackts have to be equal to a string
  //access the property with the item type inside the bracket notation
  //match name property of an object
  //find a match
  //dynamic
  //c
  // console.log(restaurant.menus)
  // console.log(restaurant.menus[itemType])//.breakfast


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

//
// function removeMenuItem(restaurant, menuItem, itemType) {
//   var breakfastMenu = restaurant.menus.breakfast ;
//   var lunchMenu = restaurant.menus.lunch;
//   var dinnerMenu = restaurant.menus.dinner;
//
//   var breakfastValues = Object.values(...restaurant.menus.breakfast)
//   var lunchValues = Object.values(...restaurant.menus.lunch)
//   var dinnerValues = Object.values(...restaurant.menus.dinner)
//
//     if (breakfastValues.includes(itemType)){
//         breakfastMenu.pop()//make it dynamic
//         return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
//     }
//     else if(dinnerValues.includes(itemType)) {
//         dinnerMenu.pop()//make it dynamic
//         return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
//     } else {
//         return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
//     }
// }

//
// function removeMenuItem(restaurant, menuItem, itemType) {
//   var breakfastMenu = restaurant.menus.breakfast ;
//   var lunchMenu = restaurant.menus.lunch;
//   var dinnerMenu = restaurant.menus.dinner;
//      console.log(restaurant)
//      console.log(breakfastMenu.length === 0)
//      console.log(breakfastMenu === undefined )
//      for (var i = 0; i < breakfastMenu.length ; i++){
// // console.log(menuItem, "Mom's Spaghetti")
//        // console.log(breakfastMenu[i].name)
//        if (breakfastMenu[i].name === menuItem){
//          breakfastMenu.splice(i, 1)
//          return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
//        }
//        if (dinnerMenu[i].name === menuItem){
//          dinnerMenu.splice(i, 1)
//          return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`
//        }
//        if (breakfastMenu.length === 0){
//         return `Sorry, we don\'t sell Mom\'s Spaghetti, try adding a new recipe!`
//      }
//    }
// }
