class TV {
  turnOn() {
    console.log("TV ON");
  }
}

class Radio {
  turnOn() {
    console.log("Radio ON");
  }
}

class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  pressPower() {
    this.device.turnOn();
  }
}

const remote = new RemoteControl(new TV());
remote.pressPower();