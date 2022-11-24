// What is a promise?

// Obligation
// Making a commitment for something in the future

//Make the promise

//.... some time passes
// time of the promise comes up
// Follow through
// or don't

// Everybody moves on.

const someAsyncFunctionWithTwoCallbacks = (successAction, failAction) => {
  // Say the you are going to do something
  setTimeout(() => {
    //...wait
    try {
      successAction("some data"); // Truth
    } catch (e) {
      failAction(e); // Lie
    }
  }, 1000);
};

// someAsyncFunctionWithTwoCallbacks(
//   () => console.log("success"),
//   () => console.log("fail")
// );

// New data structure type PROMISE

const somePromiseFunction = (timeToBoil) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (Math.random() > 0.8) {
          throw new Error("TEA KETTLE EXPLODED");
        }
        resolve("some data");
      } catch (e) {
        reject(e);
      }
    }, timeToBoil);
  });
};

const someBrokenPromiseFunction = (timeToBoil) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        //   if (Math.random() > 0.8) {
        throw new Error("TEA KETTLE EXPLODED");
        //   }
        //   resolve("some data");
      } catch (e) {
        reject(e);
      }
    }, timeToBoil);
  });
};

// somePromiseFunction(1000)
// .then(() => console.log("Water is ready!"))
// .then(() => someBrokenPromiseFunction(1500))
// .then(() => console.log("Broken promises!"))
// .then(() => somePromiseFunction(2000))
// .then(() => console.log("Water is ready!"))
// .catch((e) => console.log(e))

const boilWaterPromise = (timeToBoil) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (Math.random() > 0.5) {
          throw new Error("OH NO, OUR KETTLE EXPLODED");
        }
        resolve({message: "Water is ready", time: timeToBoil});
      } catch (e) {
        reject(e.message);
      }
    }, timeToBoil);
  });
};

const pourWaterInCup = () => {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() > 0.8) {
        throw new Error("OH NO, OUR TEACUP EXPLODED");
      }

      resolve("blub blub blub");
    } catch (e) {
      reject(e);
    }
  });
};

const steep = (waitTime) => {
  return new Promise((resolve, reject) => {
    console.log("INTENSE STARING AT TEACUP");

    setTimeout(() => {
      resolve("THE WAIT IS OVER!", waitTime);
    }, waitTime);
  });
};

const drinkTheTea = () => {
  return new Promise((resolve, reject) => {
    resolve("Delicious!");
  });
};

// boilWater(1000)
//   .then((result) => {
//     console.log(result);
//     return pourWaterInCup()
//   })
//   .then((result) => {
//     console.log(result);
//     return steep(1000)
//   })
//   .then((result) => {
//     console.log(result);
//     return drinkTheTea()
//   })
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((e) => console.log(e))
//   .finally(() => console.log("We are done!"))

  const kettle1 = boilWaterPromise(1000);
  const kettle2 = boilWaterPromise(5000);
  const kettle3 = someBrokenPromiseFunction(500);

  Promise.race([kettle1, kettle2, kettle3])
  .then(({message, time}) => console.log("Fastest only ", message, time))
  .catch((e) => console.log(e))

//   Promise.all([kettle1, kettle2, kettle3])
//   .then((kettleList) => console.log(kettleList))
//   .catch((e) => console.log(e))