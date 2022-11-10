const fizzBuzz = (n) => {
    let outputArray = [];
    for (let x = 1; x <= n; x++) {
        if (x % 3 === 0 && x % 5 === 0) {
            outputArray.push("FizzBuzz");
        } else if (x % 3 === 0) {
            outputArray.push("Fizz");
        }else if (x % 5 === 0) {
            outputArray.push("Buzz");
        } else {
            outputArray.push(x.toString());
        }
    }
    return outputArray;
};
