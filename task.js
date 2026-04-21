let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

let fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
};

async function getData() {
  let data = await fetchData();

  console.log(data);
}

getData();
