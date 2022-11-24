// Why do we want to use callbacks?
// - Because async functions need to continue their flow after an event
// Reusability

const fancyOutput = (message) => {
  //Normal Function
  console.log(`🔥🔥🔥 ${message} 🔥🔥🔥`);
};

// fancyOutput("David");

const names = ["Zak", "Lars", "Hadley", "David"];

const chooseANameAndPrintWithFire = (listOfNames, action) => {
  // Higher Order Function
  const randomIndex = Math.floor(Math.random() * 4);

  action(listOfNames[randomIndex]);
};

// chooseANameAndPrintWithFire(names, fancyOutput);
//fancyOutput is our callback function

const someObject = {
  name: "Mostafa",
  description: "A LHL student",
};

const fetchSpecificValueOfAnObject = (object, key) => {
  try {
    return object[key];
  } catch (e) {
    console.log("Invalid object key");
    return undefined;
  }
};

// const result = fetchSpecificValueOfAnObject(someObject, "age")
// console.log(result)

// setTimeout(() => {
//   try {
//     console.log("SURPRISE !!! ", nameOfPerson);
//   } catch (e) {
//     console.log("SURPRISE !!!  Sorry I forgot your name");
//   }
// }, 2000);
// console.log("Test");

const boilWater = (timeToBoil, nextAction) => {
  setTimeout(() => {
    try {
      if (Math.random() > 0.5) {
        throw new Error("OH NO, OUR KETTLE EXPLODED");
      }
      console.log("Water is ready");
      nextAction();
    } catch (e) {
      console.log(e);
    }
  }, timeToBoil);
};

const pourWaterInCup = (successAction, failAction) => {
  try {
    if (Math.random() > 0.8) {
      throw new Error("OH NO, OUR TEACUP EXPLODED");
    }
    console.log("blub blub blub");

    successAction();
  } catch (e) {

    console.log(e);
    failAction();
  } 
};

const steep = (waitTime, nextAction) => {
  console.log("INTENSE STARING AT TEACUP");

  setTimeout(() => {
    console.log("THE WAIT IS OVER!");
    nextAction;
  }, waitTime);
};

const drinkTheTea = () => {
  console.log("Delicious!");
};

boilWater(1000, () =>
  pourWaterInCup(() => { // We need to wrap in anon function in order to pass a function to the callback, otherwise we would be passing the return value of the function
    steep(1000, drinkTheTea);
  }, () => console.log("We slipped the water!"))
); 
