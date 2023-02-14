function emailPassword(id, input) {
  const Field = document.getElementById(id);
  Field.addEventListener("focus", () => {
    Field.value = input;
  });
}

emailPassword("email-field", "your@email.com");
emailPassword("password-field", "password");

function getElementEmailPasswordId(id) {
  ElementId = document.getElementById(id).value;
  return ElementId;
}

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {
  const emailValue = getElementEmailPasswordId("email-field");
  const passwordValue = getElementEmailPasswordId("password-field");

  if (emailValue === "your@email.com" && passwordValue === "password") {
    location.href = "balance.html";
  } else {
    alert("Please enter a valid email and password");
  }
});
