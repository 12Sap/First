function calculateLove() {
  var yourName = document.getElementById("yourName").value.trim();
  var partnerName = document.getElementById("partnerName").value.trim();

  if (yourName === "" || partnerName === "") {
    alert("Please enter both names.");
    return;
  }

  var lovePercentage = Math.floor(Math.random() * 101);
  var result = yourName + " and " + partnerName + "'s Love Percentage: " + lovePercentage + "%";

  document.getElementById("result").innerHTML = result;
}