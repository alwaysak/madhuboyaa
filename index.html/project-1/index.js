let subscribeFormEl = document.getElementById("subScribeForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Requried"
    } else {
        nameErrMsgEl.textContent = ""
    }
});
emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Requried"
    } else {
        emailErrMsgEl.textContent = ""
    }
});
subscribeFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});