import SampleComponent from './components/PoemComponent';
import PoemService from './helpers/PoemService';

window.onload = (event) => {

  console.log(PoemService);
  PoemService.fetchPoem();

  let myComponent = new SampleComponent('.note', 'Hey there! Webpack 2.x is working!');
  myComponent.render();

  System.import('./components/LazyLoadingComponent').then((Painter) => {
    console.log(typeof Painter)
  }).catch((error) => {
    console.log(error);
  });


};



class Node {
  constructor(attribute) {
    this._val = attribute;
    this._parent = null;
    this._children = [];
  }
  isRoot() {
    if (this._parent === true) return true;
    return false;
  }
  get children() {
    return this._children;
  }
  hasChildren() {
    return this._children.length > 0;
  }
  get value() {
    return this._val;
  }
  set value(attribute) {
    this._val = attribute;
  }
  append(child) {
    child._parent = this;
    this._children.push(child);
    return this;
  }
  toString() {
    return `Node (val: ${this._val}), children: ${this._children.length}`;
  }
}

class Tree {
  constructor(root) {
    this._root = root;
  }

  static map(node, func, tree = null) {
    node.value = func(node.value);
    if (tree === null) {
      tree = new Tree(node);
    }

    if (node.hasChildren()) {
      _.map(node.children, function(child) {
        Tree.map(child, func, tree);
      });
    }
    return tree;
  }
  get root() {
    return this._root;
  }
}