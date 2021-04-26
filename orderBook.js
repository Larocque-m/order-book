function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []
  let newOrders = []

  // want to add to new arrays and check if book is empty 
  if (existingBook.length === 0) {
    const updatedBook = existingBook.concat(incomingOrder)

    return updatedBook
  }
}

module.exports = reconcileOrder
