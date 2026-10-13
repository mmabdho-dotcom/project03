const title = document.getElementById("title");
const message = document.querySelector(".message");

title.textContent = "Welcome to JavaScript!";
message.textContent = "DOM Updated Successfully";

title.style.color = "blue";

message.classList.add("active");