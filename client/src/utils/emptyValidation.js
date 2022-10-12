module.exports = (data) => {
  for (let input in data) {
    if (data[input] === "") {
      document.querySelector(".submit-form-info").style.color = "red";
      document.querySelector(".submit-form-info").innerHTML =
        "Please fill out all fields!";
      return false;
    }
  }
};
