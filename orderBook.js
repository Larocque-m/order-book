function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []
  let newOrders = []

  // want to add to new arrays and check if book is empty 
  if (existingBook.length === 0) {
    const updatedBook = existingBook.concat(incomingOrder)

    return updatedBook
  }
  // loop through the existingBook objects
  for (let i = 0; i < existingBook.length; i++) {
    // make varibles from the objects 
    const bookType = existingBook[i].type
    const bookPrice = existingBook[i].price
    const orderType = incomingOrder.type
    let bookQuantity = existingBook[i].quantity
    let orderPrice = incomingOrder.price
    let orderQuantity = incomingOrder.quantity

    if (bookType !== orderType &&
      bookPrice === orderPrice &&
      bookQuantity === orderQuantity) {
      // if these match then price will be true
      incomingOrder.price = true
    }
  }
}

module.exports = reconcileOrder
