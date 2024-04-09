const nameInput = document.querySelector("#name");
const h3 = document.querySelector("#year");
const submitBtn =  document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
    const name = nameInput.value;
    h3.innerHTML = name; 
});
