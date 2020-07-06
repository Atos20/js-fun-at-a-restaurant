class Chef {
  constructor(name, restaurant) {
    this.name = name,
    this.restaurant = restaurant
  }

  greetCustomer(costumer, isMorning) {
    if (isMorning === undefined || isMorning === false){
      return `Hello, ${costumer}!`
    } else {
      return `Good morning, ${costumer}!`
    }
  }

  checkForFood(menuItem) {
    var foodMenu = this.restaurant.menus[menuItem.type]

    for(var i = 0; i < breakfastMenu.length; i++){
      if (breakfastMenu[i] === menuItem){
        return `Yes, we're serving ${menuItem.name} today!`
      }
       else if (breakfastMenu[i] === undefined || breakfastMenu.length === 0){
        return `Sorry, we aren't serving Quiche today.`
      }
    }
  }
}

module.exports = Chef;
