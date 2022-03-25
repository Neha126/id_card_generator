function details() {
  document.querySelector(".sId").innerHTML = localStorage.getItem("sId");

  document.querySelector(".name").innerHTML = localStorage.getItem("name");

  document.querySelector(".branch").innerHTML = localStorage.getItem("branch");

  document.querySelector(".section").innerHTML =
    localStorage.getItem("section");
}
window.addEventListener("DOMContentLoaded", details);
