let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");
let updateBtnEl = document.getElementById("updateBtn")

let validateNewPassword = function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Requried*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
};
let validateConfirmPassword = function() {
    let newPassword = newPasswordEl.value;
    let confirmPassword = confirmPasswordEl.value;
    if (confirmPassword !== newPassword) {
        confirmPasswordErrMsgEl.textContent = "password must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
};
newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);
updatePasswordFormEl.addEventListener("submit", function(event) {
    validateNewPassword;
    validateConfirmPassword;
    event.preventDefault();
});