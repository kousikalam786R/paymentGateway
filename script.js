document
  .getElementById("openModalBtn")
  .addEventListener("click", openFirstModal);

function openFirstModal() {
  document.getElementById("firstModal").style.display = "block";
}

// function closeModal() {
//   document.querySelector(".modal").style.display = "none";
// }

function openSecondModal() {
  const selectedAmount = document.getElementById("amountInput").value;
  const selectedCurrency = document.getElementById("currencySelect").value;

  if (
    !selectedAmount ||
    isNaN(selectedAmount) ||
    selectedAmount <= 0 ||
    !selectedCurrency
  ) {
    document.getElementById("amountValidationFeedback").innerHTML =
      "Please enter a valid amount";
    return;
  }

  document.getElementById("displayAmount").textContent = selectedAmount;
  document.getElementById("displayCurrency").textContent = selectedCurrency;
  document.getElementById("secondModal").style.display = "block";
  document.querySelector("#firstModal").style.display = "none";
}

function openThirdModal() {
  const selectedDialCode = document.getElementById("dialCodeSelect").value;
  const enteredPhoneNumber = document.getElementById("mobileNumberInput").value;
  const isValid = /^[0-9]{10}$/.test(mobileNumberInput.value);

  if (!enteredPhoneNumber || !isValid || !selectedDialCode) {
    document.getElementById("mobileNumberValidation").innerHTML =
      "Mobile number should be at least 10 digit or not empty";
    return;
  }
  document.getElementById("displayDialCode").textContent = selectedDialCode;
  document.getElementById("displayPhoneNumber").textContent =
    enteredPhoneNumber;

  document.getElementById("thirdModal").style.display = "block";
  document.querySelector("#secondModal").style.display = "none";
}

function completePayment() {
  alert(`Payment is successful. `);
  document.getElementById("alertBox").style.display = "block";
  location.reload();
}
function cancelPayment() {
  location.reload();
}
