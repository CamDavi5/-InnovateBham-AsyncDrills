/*function stringLog(string) {
    console.log(string);
    setTimeout(() => {
        console.log("Uh, are you still here?");
    }, 2000)
}
stringLog("Hello World!");*/

/*function getWords() {
    console.log('Hey there!');
    setTimeout(() => {
        console.log('Uh... this is a little awkward.');
        setTimeout(() => {
            console.log('Hey, do you wanna hear something cool?');
            setTimeout(() => {
                console.log('No? Okay.');
            }, 1000)
        }, 2000)
    }, 3000)
}
getWords();*/

/*function done() {
    console.log("Job's done!");

}
function countdown(num, callback) {
    setTimeout(() => {
        if (num > 0) {
            console.log(`${num}...`)
            countdown((num-1), callback);
        }
        else {
            return callback();
        }
    }, 1000);
}
countdown(5, done);*/

let lunchTime = true;
let orderMeSomeFood = new Promise((resolve, reject) => {
    if (lunchTime == true) {
        let lunchObj = {
            lunch: "Crispitos",
            drink: "Milk"
        }
        resolve(lunchObj);
    } else {
        let lunchErr = new Error("It is NOT lunchtime!");
        reject(lunchErr);
    }
});
orderMeSomeFood
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});