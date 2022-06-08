for (i = 0; i < 10; i++) {
    console.log(i)
}

setTimeout(() => {
    console.log("2. The timer has expired")
}, 1500)

setTimeout(() => {
    console.log("1. The timer has expired")
}, 50)



console.log("Are we done yet?")
