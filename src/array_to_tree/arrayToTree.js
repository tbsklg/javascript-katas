const arrayToTree = (array) => {
  const createTree = (index = 0) => {
    if (index > array.length - 1) return undefined

    return {
      value: array[index],
      left: createTree(2 * index + 1),
      right: createTree(2 * index + 2),
    }
  }

  return createTree()
}

const TreeNode = function (value, left, right) {
  this.value = value
  this.left = left
  this.right = right
}

module.exports = { arrayToTree, TreeNode }
