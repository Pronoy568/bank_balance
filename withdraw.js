const withdrawBtn = getElementsById("withdrawBtn");

withdrawBtn.addEventListener("click", function () {
  const withdrawInputField = getElementsById("withdrawInputField");
  const withdrawAmount = getElementsById("withdrawAmount");
  const balanceAmount = getElementsById("balanceAmount");

  const inputValue = withdrawInputField.value;
  withdrawInputField.value = "";

  let pattern = /\D/g;
  let whitespace = /\s/g;
  if (
    inputValue.match(pattern) === null &&
    inputValue.match(whitespace) === null
  ) {
    const newWithdrawAmount = parseFloat(withdrawAmount.innerText);
    const newBalanceAmount = parseFloat(balanceAmount.innerText);

    const totalWithdrawAmount = parseFloat(inputValue) + newWithdrawAmount;
    const totalBalanceAmount = newBalanceAmount - parseFloat(inputValue);

    if (totalBalanceAmount >= 0) {
      withdrawAmount.innerText = totalWithdrawAmount;
      withdrawInputField.value = "";
      balanceAmount.innerText = totalBalanceAmount;
    } else if (totalBalanceAmount < 0) {
      alert("Not Enough Money !!!");
    } else {
      alert("Enter the Number !!!");
    }
  } else {
    alert("Please give valid number !!!");
  }
});
