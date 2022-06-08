const runAfterDelay = (callback) => {
    const user = {
      first_name: "David",
    };
    console.log('before timeout' ,user)
    setTimeout(() => {
      user.first_name = "Bob";
      callback(user)
    }, 1000);
}

runAfterDelay((argFromFunction) =>  {
    console.log('after timeout', argFromFunction)
})



