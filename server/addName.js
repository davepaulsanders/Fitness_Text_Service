// Adding clients name to daily texts
module.exports = (client, message) => {
  if (message.includes("*")) {
    const textWithName = message.replace(/\*/g, client.firstName);
    return textWithName;
  } else {
    return message;
  }
};
