const depositBtn = getElementsById("depositBtn");

depositBtn.addEventListener("click", function () {
  const depositInputField = getElementsById("depositInputField");
  const depositAmount = getElementsById("depositAmount");
  const balanceAmount = getElementsById("balanceAmount");

  const inputValue = depositInputField.value;
  depositInputField.value = "";

  let pattern = /\D/g;
  let whitespace = /\s/g;
  if (
    inputValue.match(pattern) === null &&
    inputValue.match(whitespace) === null
  ) {
    const newDepositAmount = parseFloat(depositAmount.innerText);
    const newBalanceAmount = parseFloat(balanceAmount.innerText);

    const totalDepositAmount = parseFloat(inputValue) + newDepositAmount;
    const totalBalanceAmount = parseFloat(inputValue) + newBalanceAmount;
    if (totalBalanceAmount >= 0) {
      depositAmount.innerText = totalDepositAmount;
      depositInputField.value = "";
      balanceAmount.innerText = totalBalanceAmount;
    } else {
      alert("Enter the Number !!!");
    }
  } else {
    alert("Please give valid number !!!");
  }
});
