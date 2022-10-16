// const { NotImplementedError } = require('../extensions/index');
const { Node } = require('../extensions/list-tree');

class BinarySearchTree {

  constructor() {
    this.root = null; // присваиваем изначальный рут = нал
  }


  //? .add() пробуем реализовать медот добавления
  add(data) {
    const createNode = new Node(data);
    // создаем инстанс для создания ноды, если ее не было раньше
    if (!this.root) {
      this.root = createNode;
      return;
    }
    // нам понадобиться изменияемая текущая нода, которую мы будем сортировать налево и направо
    let currentNode = this.root;

    while (currentNode) {
      if (createNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = createNode;
          return;
        }
        currentNode = createNode.left;
      } else if (!currentNode.right) {
        currentNode.right = createNode;
        return;
      }
      currentNode = createNode.right;
    }
  }

  //? .find() пробуем найти значение в бинарном дереве  
  find(data) {
    return findNode(this.rootData, data);

    function findNode(node, data) {
      if (!node) {
        return null
      } else if (node.data === data) {
        return node;
      } else if (node.data > data) {
        return searchWithin(node.left, value);
      } else {
        return searchWithin(node.right, value);
      }
    }
  }


   max(Node, node) {
    let maxValue = node.data;
    if(node.left != null) {
        maxValue = Math.maxValue(maxValue, max(node.left));
    }
    if(node.right != null) {
        maxValue = Math.maxValue(maxValue, max(node.right));
    }
    return maxValue;
}



}

module.exports = {
  BinarySearchTree
};





// todo: .add() - можно протестировать добавление значений в бинарное дерево

// начало .add()
const createBinaryTree = new BinarySearchTree();
createBinaryTree.add(30);
createBinaryTree.add(3);
createBinaryTree.add(5);
createBinaryTree.add(6);
createBinaryTree.add(9);
createBinaryTree.add(15);
createBinaryTree.add(18);
createBinaryTree.add(4);
createBinaryTree.add(11);
createBinaryTree.add(16);
createBinaryTree.find(8);

// console.log(createBinaryTree.has(15));
// конец .add()



//   has(/* data */) {
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