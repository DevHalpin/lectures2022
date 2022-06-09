const store = [
  "🌮",
  "🍕",
  "🥑",
  "🥖",
  "🧄",
  "🧇",
  "🥦",
  "🥟",
  "🍙",
  "🌯",
  "🥗",
  "🍣",
  "🍩",
  "🥮",
  "🍦",
];

const grabItem = (store) => {
  const numOptions = store.length;
  const randomId = Math.round(Math.random() * (numOptions - 1));
  const randomItem = store[randomId];
  return randomItem;
};

const checkout = (customerNum, item) => {
  console.log(
    `(${customerNum}) 🛒 Thank you for buying ${item}. Have a nice day!`
  );
};

const checkoutAllItems = (customerNum, cart) => {
  for (const item of cart) {
    checkout(customerNum, item);
  }
};

const askCustomerService = (item) => {
  console.log(`\t 🤷 Hello, customer service, where can I find ${item}?`);
  const timer = Math.round(Math.random() * 3) * 1000;
  console.log(
    `\t🕵️‍♀️ let me go grab those ${item} for you. it will take me ${
      timer / 1000
    } seconds`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random < 0.9) {
        reject(`\t🚨🕵️‍♀️ Sorry, I couldn't find ${item}`);  
      } else {
        console.log(`\t🕵️‍♀️ Here is that item ${item} for you`);
        resolve(item);
      }
    }, timer);
  });
};

const groceryCart = [];
askCustomerService(grabItem(store))
  .then((res) => {
    console.log(res);
    return askCustomerService(grabItem(store));
  })
  .then((res) => {
    console.log(res);
    return askCustomerService(grabItem(store));
  })
  .then((res) => {
    console.log(res);
    return askCustomerService(grabItem(store));
  })
  .catch((err) => {
    console.log(err);
  });

checkout(0, grabItem(store));
