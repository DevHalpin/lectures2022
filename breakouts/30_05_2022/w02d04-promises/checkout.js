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

askCustomerService = (item, customerNum, callback) => {
  console.log(`\t 🤷 Hello, customer service, where can I find ${item}?`);
  const timer = Math.round(Math.random() * 3) * 1000;
  console.log(
    `\t🕵️‍♀️ let me go grab those ${item} for you. it will take me ${
      timer / 1000
    } seconds`
  );

  setTimeout(() => {
    if (Math.random() < 0.5) {
      return callback(
        `\t🚨🕵️‍♀️ Sorry, I couldn't find ${item}, ${customerNum}`,
        customerNum
      );
    }
    console.log(`\t 🕵️‍♀️ here are your ${item}!`);
    callback(null, customerNum, item);
  }, timer);
};
const groceryCart = [];
askCustomerService(grabItem(store), 1, (err, customerNum, item) => {
  if (err) {
    return console.log(err);
  }
  groceryCart.push(item);
  askCustomerService(grabItem(store), customerNum, (err, customerNum, item) => {
    if (err) {
      console.log(err);
      return checkout(customerNum, item);
    }
    groceryCart.push(item);
    checkoutAllItems(customerNum, groceryCart);
  });
});

checkout(0, grabItem(store));
