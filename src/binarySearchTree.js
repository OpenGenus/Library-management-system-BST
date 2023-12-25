"use strict"

class Node {
  constructor(key, copies) {
    this.key = key;
    this.copies = copies;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key, copies = 1) {
    const newNode = new Node(key, copies);
    if (this.root === null) 
      this.root = newNode;
    else 
      this._insertNode(this.root, newNode);
  }
  
  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null)
        node.left = newNode;
      else 
        this._insertNode(node.left, newNode);
    } 
    else if (newNode.key > node.key) {
      if (node.right === null)
        node.right = newNode;
      else 
        this._insertNode(node.right, newNode);
    }

    else {
      node.copies += newNode.copies;
    }
  }
  
  search(key) {
    return this._searchNode(this.root, key);
  }
  
  _searchNode(node, key) {
    if (node === null) 
      return false;

    if (key < node.key) 
      return this._searchNode(node.left, key);
    else if (key > node.key) 
      return this._searchNode(node.right, key);
    else 
      return true;

  }

    lendBook(bookName, numCopies = 1) {
    const foundNode = this._findNode(this.root, bookName);
    if (foundNode && foundNode.copies >= numCopies) {
      foundNode.copies -= numCopies;
      console.log(`Successfully lent ${numCopies} copies of ${bookName}.`);
    } else if (foundNode && foundNode.copies < numCopies) {
      console.log(`Sorry, only ${foundNode.copies} copies of ${bookName} are available.`);
    } else {
      console.log(`${bookName} not found in the library.`);
    }
  }

  returnBook(bookName, numCopies = 1) {
    const foundNode = this._findNode(this.root, bookName);
    if (foundNode) {
      foundNode.copies += numCopies;
      console.log(`Successfully returned ${numCopies} copies of ${bookName}.`);
    } else {
      console.log(`${bookName} not found in the library.`);
    }
  }

  checkBookStatus(bookName) {
    const foundNode = this._findNode(this.root, bookName);
    if (foundNode) {
      console.log(`${bookName} - Available Copies: ${foundNode.copies}`);
    } else {
      console.log(`${bookName} not found in the library.`);
    }
  }

  _findNode(node, key) {
    if (node === null) return null;
    if (key < node.key) return this._findNode(node.left, key);
    else if (key > node.key) return this._findNode(node.right, key);
    else return node;
  }

  printLibraryStatus() {
    this._inOrderTraversal(this.root);
  }

  _inOrderTraversal(node) {
    if (node !== null) {
      this._inOrderTraversal(node.left);
      console.log(`Book: ${node.key} - Available Copies: ${node.copies}`);
      this._inOrderTraversal(node.right);
    }
  }

}


module.exports = BinarySearchTree;
