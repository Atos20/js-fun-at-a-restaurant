class Chef {
  constructor(name, restaurant) {
    this.name = name,
    this.restaurant = restaurant
  }

  greetCustomer(costumer, isMorning) {
    if (!isMorning){
      return `Hello, ${costumer}!`
    } else {
      return `Good morning, ${costumer}!`
    }
  }

  checkForFood(menuItem) {
    var foodMenu = this.restaurant.menus[menuItem.type]
    if (foodMenu.length > 0){
      for(var i = 0; i < foodMenu.length; i++){
        if (foodMenu[i] === menuItem){
          return `Yes, we're serving ${menuItem.name} today!`
        }
      }
    }
     else {
      return `Sorry, we aren\'t serving ${menuItem.name} today.`
    }
  }
}


module.exports = Chef;
