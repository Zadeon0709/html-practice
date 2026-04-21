let button = document.querySelector("#btn");

button.addEventListener("click", async () => {
  document.querySelector("#setup").textContent = "Loading...";
  document.querySelector("#punchline").textContent = "";
  let response = await fetch(
    "https://official-joke-api.appspot.com/random_joke",
  );

  let data = await response.json();

  document.querySelector("#setup").textContent = data.setup;
  document.querySelector("#punchline").textContent = data.punchline;
});
