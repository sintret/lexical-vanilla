import { ElementNode } from "lexical";

export class Placeholder extends ElementNode {
  static getType() {
    return "placeholder";
  }

  static clone(node) {
    return new Placeholder(node.__key);
  }

  createDOM() {
    const dom = document.createElement("div");
    return dom;
  }

  updateDOM(prevNode, dom) {
    return false;
  }
}

export function $createPlaceholderNode() {
  return new Placeholder();
}

export function $isPlaceholderNode(node) {
  return node instanceof Placeholder;
}
