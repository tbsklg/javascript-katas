// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage

    this._isEmptyCollection = collection.length === 0
}

PaginationHelper.prototype._isValidPageIndex = function (pageIndex) {
    return pageIndex >= 0 && pageIndex < this.pageCount()
}

PaginationHelper.prototype._isValidItemIndex = function (itemIndex) {
    return itemIndex >= 0 && itemIndex < this.itemCount()
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this.itemCount() / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    if (this._isEmptyCollection || !this._isValidPageIndex(pageIndex)) return -1

    const remainingItems = this.itemCount() - this.itemsPerPage * pageIndex
    return Math.min(remainingItems, this.itemsPerPage)
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    if (this._isEmptyCollection || !this._isValidItemIndex(itemIndex)) return -1

    return Math.floor(itemIndex / this.itemsPerPage)
}

module.exports = PaginationHelper
