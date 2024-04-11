const nameInput = document.querySelector("#name");
const yearInput = document.querySelector("#year");
const h3 = document.querySelector("#url");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const year = yearInput.value;
  if (name !== "" && year !== "") {
    h3.innerHTML = `${h3.innerHTML}?name=${name}&year=${year}`;
    nameInput.value = "";
    yearInput.value = "";
  } else if (name && !year) {
    h3.innerHTML = `${h3.innerHTML}?name=${name}`;
    nameInput.value = "";
    yearInput.value = "";
  } else if (!name && year) {
    h3.innerHTML = `${h3.innerHTML}?year=${year}`;
    nameInput.vavaluel = "";
    yearInput.value = "";
  }
});