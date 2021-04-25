const reconcileOrder = (existingBook, incomingOrder) => {
  if (existingBook.length === 0) {
    const updatedBook = existingBook.concat({ ...incomingOrder })

    return updatedBook
  }
}

module.exports = reconcileOrder


