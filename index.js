module.exports = (action, key, value = "") => {
  if (action === "SET" && key !== "" && value !== "") {
    localStorage.setItem(key, value);
  } else if (action === "GET" && key !== "") {
    return localStorage.getItem(key);
  }
};
