class PaymentContext {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  pay(amount) {
    this.strategy.pay(amount);
  }
}

class PayPal {
  pay(amount) {
    console.log(`Paid ${amount} using PayPal`);
  }
}

class CreditCard {
  pay(amount) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

const context = new PaymentContext();
context.setStrategy(new PayPal());
context.pay(50);
context.setStrategy(new CreditCard());
context.pay(30);