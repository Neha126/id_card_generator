//   document.getElementById("container").classList.add("flipped");
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  var valid = isValid();
  if (valid) {
    document.querySelector(".loading").style.display = "block";
    var val = Math.floor(1000 + Math.random() * 9000);
    document.querySelector(".sId").textContent = val;
    let fullName = document.getElementById("name1").value;
    document.querySelector(".name").innerHTML = fullName;

    let Branch = document.getElementById("branch1").value;
    document.querySelector(".branch").innerHTML = Branch;

    let Section = document.getElementById("section1").value;
    document.querySelector(".section").innerHTML = Section;
    setTimeout(() => {
      document.getElementById("container").classList.add("flipped");
    }, 2000);
  } else {
    showError("Please enter valid input...");
  }
});

function isValid() {
  let fullName = document.getElementById("name1").value;
  let Branch = document.getElementById("branch1").value;
  let Section = document.getElementById("section1").value;

  if (fullName == "" || Branch == "" || Section == "") {
    return false;
  } else {
    return true;
  }
}

function showError(error) {
  document.querySelector(".loading").style.display = "none";

  const errorDiv = document.createElement("div");
  errorDiv.style.color = "red";
  errorDiv.style.fontSize = "20px";

  //get element
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  //add class
  errorDiv.className = "alert";
  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  //insert error above heading
  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 5000);
}
function clearError() {
  document.querySelector(".alert").remove();
}
