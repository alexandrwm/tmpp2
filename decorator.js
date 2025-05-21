class Coffee {
  cost() {
    return 5;
  }
}

function withMilk(coffee) {
  const cost = coffee.cost();
  coffee.cost = () => cost + 2;
  return coffee;
}

let myCoffee = new Coffee();
myCoffee = withMilk(myCoffee);
console.log("Cost:", myCoffee.cost());