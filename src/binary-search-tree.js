const { Node } = require('../extensions/list-tree');

class BinarySearchTree {
  constructor() {
    this.originRoot = null; // присваиваем изначальный рут - пустой
  }

  //? реализуем подготовку первого узла
  root() {
    return this.originRoot;
  }

  //? .add() пробуем реализовать медот добавления элемента в массив
  add(data) {
    this.originRoot = currentNode(this.originRoot, data);

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
    return hasVelue(this.originRoot, data);

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
    return findVelue(this.originRoot, data);

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

  //? реализуем удаление ноды со значением
  remove(data) {
    this.originRoot = deleteData(this.originRoot, data);

    function deleteData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = deleteData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = deleteData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = deleteData(node.right, minRight.data);
        return node;
      }
    }
  }

  //? находим минимум
  min() {
    var minNode = this.originRoot;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data;
  }

  //? находим максимальное значение
  max() {
    var maxNode = this.originRoot;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;
  }

}

module.exports = {
  BinarySearchTree
};

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
// createBinaryTree.has(8);
// createBinaryTree.find(8);
// createBinaryTree.remove(8);
// console.log(createBinaryTree.has(15));
