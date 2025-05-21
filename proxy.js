class RealImage {
  constructor(filename) {
    this.filename = filename;
  }

  display() {
    console.log(`Displaying ${this.filename}`);
  }
}

class ProxyImage {
  constructor(filename) {
    this.realImage = null;
    this.filename = filename;
  }

  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

const image = new ProxyImage("photo.jpg");
image.display();
image.display();