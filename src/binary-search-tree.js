// const { NotImplementedError } = require('../extensions/index');
const { Node } = require('../extensions/list-tree');

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  add(data) { 
    const createNode = new Node(data); // создаем инстанс для создания ноды, еслии ее нет
    if(!this.root){
      this.root = createNode;
      return;
    }
  }

//   has(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   find(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   remove(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   min() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   max() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
}

module.exports = {
  BinarySearchTree
};

const createNode = new BinarySearchTree();
console.log(createNode);
// testTree.add(2);
createNode.add(3);
createNode.add(5);
createNode.add(6);
createNode.add(9);
createNode.add(10);
createNode.add(12);
createNode.add(16);
createNode.add(30);
console.log(createNode);