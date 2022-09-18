document.addEventListener("DOMContentLoaded", () => {
document.querySelector("#input").addEventListener("keydown", function(e){
  if (e.code==="Enter"){
    console.log("enter")
  }
});
});
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input")
  inputField.addEventListener("keydown", function (e) {
    if (e.code==="Enter"){
      let input = inputField.value;
      console.log(input);
      inputField.value = "";
      document.getElementById("text1").innerHTML =input;
    }
  });
});