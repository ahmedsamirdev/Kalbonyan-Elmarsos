const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([7, 4, 1]);
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("success", result);
  })
  .catch((error) => {
    console.log("error", error);
  });
