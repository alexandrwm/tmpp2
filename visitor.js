class TextNode {
  accept(visitor) {
    visitor.visitText(this);
  }
}

class ImageNode {
  accept(visitor) {
    visitor.visitImage(this);
  }
}

class Renderer {
  visitText(node) {
    console.log("Rendering text node");
  }

  visitImage(node) {
    console.log("Rendering image node");
  }
}

const nodes = [new TextNode(), new ImageNode()];
const renderer = new Renderer();

nodes.forEach(node => node.accept(renderer));