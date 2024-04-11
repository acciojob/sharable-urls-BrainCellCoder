const nameInput = document.querySelector("#name");
const yearInput = document.querySelector("#year");
const h3 = document.querySelector("#url");
const submitBtn =  document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
    const name = nameInput.value;
    const year = nameInput.value;
	alert(h3.innerHTML)
	if(name !== "" && year !== ""){
		h3.innerHTML = `${h3.innerHTML}`
	} 
});
