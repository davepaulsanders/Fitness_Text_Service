module.exports = (data) => {
  for (let input in data) {
    if (data[input] === "" && input !== "mediaLink") {
      return false;
    }
  }
};
