function quickResolve() {
  return new Promise((resolve) => {
      setTimeout(() => resolve("Quickly resolved"), 1000);
  });
}

function slowResolveOrFastReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Quickly rejected")), 1000);
      setTimeout(() => resolve("Slowly resolved"), 1000);
  });
}

Promise.race([slowResolveOrFastReject(), quickResolve()])
  .then(result => {
      console.log("Result:", result);
  })
  .catch(error => {
      console.error("Error:", error.message);
  });