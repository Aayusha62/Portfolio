document.getElementById("contact").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from actually submitting

  const text = document.getElementById("text").value.trim();
  console.log(text);
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("number").value.trim();
//   const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (text === "" || email === "" || number === "" || message === "") {
    alert("Please fill out all fields before sending.");
  } else {
    alert("Your message has been sent!");
    text.value("");
    this.reset();
    document.getElementById("contact").reset();
  }
});
