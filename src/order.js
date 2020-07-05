function takeOrder(orders, deliveryOrders) {
  deliveryOrders.push(orders)
  if (deliveryOrders.length > 3){
    deliveryOrders.pop()
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  deliveryOrders.forEach((item, i) => {
    if(orderNumber === item.orderNumber){
      deliveryOrders.splice(i, 1)
    }
  });
}

function listItems(ordersList) {
  var itemlist = [];
    ordersList.forEach(function(order){
      itemlist.push(order.item)
    })
    var orderRequest = itemlist.join(', ')
    return orderRequest
}

function searchOrder(deliveryOrders, itemName) {
  var itemList = [];
    for (var i = 0; i < deliveryOrders.length; i++){
      itemList.push(deliveryOrders[i].item)
    }
      return (itemList.includes(itemName)) ? true : false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
