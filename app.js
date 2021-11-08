console.log("Hello World!\n==========\n");

// Exercise 1 Section
/*
function watchTurorialCallback(callback, errorCallback) {
  let userLeft = false;
  let userWatchingLiveStream = true;

  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingLiveStream) {
    callback("Thumbs up and Subscribe");
  }
}

watchTurorialCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);
*/

console.log("EXERCISE 1:\n==========\n");
let isWatching = new Promise((resolve, reject) => {
    let userWatchingLiveStream = true;
    if (userWatchingLiveStream == true) {
        resolve("Thumbs up and Subscribe!");
    } else {
        reject("User left.");
    }
});

isWatching.then((message) => {
    console.log('This is in the then: ' + message)
}).catch((message) => {
    console.log('This is in the catch: ' + message)
});
