// Task - https://www.codewars.com/kata/57e5a6a67fbcc9ba900021cd/train/javascript

let TreeNode = function (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function arrayToTree(array) {

  if (array.length < 1) {
    return undefined;
  }

  const root = new TreeNode(array[0]);

  let buffer = [root]
  let i = 1;
  while (i < array.length) {
    let newBuffer = [];

    for (let p of buffer) {
      if (i < array.length) {
        p.left = new TreeNode(array[i])
        newBuffer.push(p.left)
        i++
      }
      if (i < array.length) {
        p.right = new TreeNode(array[i])
        newBuffer.push(p.right)
        i++
      }
    }
    buffer = newBuffer
  }

  return root;
}


let array = [17, 0, -4, 3, 15];


console.log(arrayToTree(array));

// let expected = new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4))

