class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

const subject = new Subject();
subject.subscribe(data => console.log("Observer 1 received:", data));
subject.subscribe(data => console.log("Observer 2 received:", data));
subject.notify("Event X");