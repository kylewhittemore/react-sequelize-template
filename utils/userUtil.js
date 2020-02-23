const userUtils = {
  getVerificationCode() {
    const code = Math.floor(Math.random() * 1000000);
    return code;
  },
};

module.exports = userUtils;
