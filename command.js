class Light {
  turnOn() {
    console.log("Light is ON");
  }

  turnOff() {
    console.log("Light is OFF");
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

const light = new Light();
const onCommand = new Command(() => light.turnOn());
const offCommand = new Command(() => light.turnOff());

onCommand.execute();
offCommand.execute();