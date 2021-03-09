module.exports = {
  get userToken() {
    if (process.browser) return localStorage.getItem("userToken");
    else return null;
  },

  set userToken(value) {
    if (process.browser) localStorage.setItem("userToken", value);
  }
};
