const { NotImplementedError } = require('../extensions/index');
const { Node } = require('../extensions/list-tree');

class BinarySearchTree {
  constructor() {
    this.orginRoot = null; // присваиваем изначальный рут - пустой
  }

  //? реализуем подготовку первого узла
  root() {
    return this.orginRoot;
  }

  //? .add() пробуем реализовать медот добавления элемента в массив
  add(data) {
    this.orginRoot = currentNode(this.orginRoot, data);

    function currentNode(node, dataValue) {
      // создаем ноду, если ее не было раньше
      if (!node) {
        return new Node(dataValue);
        // иначе если в ноде есть такое же значение, возвращаем его
      } else if (node.data == dataValue) {
        return node;
        // иначе если значение меньше добавляемого закидываем влево, иначе, если больше, вправо
      } else if (dataValue < node.data) {
        node.left = currentNode(node.left, dataValue);
      } else {
        node.right = currentNode(node.right, dataValue);
      } return node;
    }
  }

  //? .has() проверяем есть/нет значения в массиве
  has(data) {
    return hasVelue(this.orginRoot, data);

    function hasVelue(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      } else if (node.data < data) {
        return hasVelue(node.right, data);
      } else {
        return hasVelue(node.left, data);
      }
    }
  }

   //? .find() пробуем найти значение в бинарном дереве  
  find(data) {
    return findVelue(this.orginRoot, data);

    function findVelue(node, data) {
      if (!node) {
        return null;
      } else if (node.data == data) {
        return node;
      } else if (node.data > data) {
        return findVelue(node.left, data);
      } else {
        return findVelue(node.right, data);
      }
    }
  }
  //! важное примечание: благодяря логике устройства бинарного дерева, поиск в нем происходит быстро,
  //! скорости мы достигаем за счет того, что в процессе отметаем области, где просто не может находится
  //! искомое значение, таким образом область поиска сокращается в прогрессии

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }


}

module.exports = {
  BinarySearchTree
};

// todo: .add() - можно протестировать добавление значений в бинарное дерево

// начало .add()
// const createBinaryTree = new BinarySearchTree();
// createBinaryTree.add(30);
// createBinaryTree.add(3);
// createBinaryTree.add(5);
// createBinaryTree.add(6);
// createBinaryTree.add(9);
// createBinaryTree.add(15);
// createBinaryTree.add(18);
// createBinaryTree.add(4);
// createBinaryTree.add(11);
// createBinaryTree.add(16);
// createBinaryTree.find(8);
// console.log(createBinaryTree.has(15));
