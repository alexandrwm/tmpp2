class OldPrinter {
  printOld(text) {
    console.log(`OldPrinter: ${text}`);
  }
}

class NewPrinterAdapter {
  constructor(oldPrinter) {
    this.oldPrinter = oldPrinter;
  }

  print(text) {
    this.oldPrinter.printOld(text);
  }
}

const printer = new NewPrinterAdapter(new OldPrinter());
printer.print("Hello");