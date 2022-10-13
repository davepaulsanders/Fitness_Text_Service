module.exports = (data) => {
  for (let input in data) {
    if (data[input] === "") {
      
      return false;
    }
  }
};
