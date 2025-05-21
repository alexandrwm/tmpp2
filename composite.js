class File {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log(`File: ${this.name}`);
  }
}

class Folder {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  add(item) {
    this.children.push(item);
  }

  display() {
    console.log(`Folder: ${this.name}`);
    this.children.forEach(child => child.display());
  }
}

const root = new Folder("Root");
root.add(new File("file1.txt"));
const sub = new Folder("Subfolder");
sub.add(new File("file2.txt"));
root.add(sub);
root.display();