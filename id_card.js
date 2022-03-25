function details() {
  document.querySelector(".sId").innerHTML = localStorage.getItem("sId");

  document.querySelector(".name__value").innerHTML =
    localStorage.getItem("name");

  document.querySelector(".branch_name").innerHTML =
    localStorage.getItem("branch");

  document.querySelector(".your_section").innerHTML =
    localStorage.getItem("section");
}
window.addEventListener("DOMContentLoaded", details);
