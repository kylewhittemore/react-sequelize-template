const userUtils = {
  getRandom() {
    const code = Math.floor(Math.random() * 1000000);
    console.log(code);
    return code;
  },
};

module.exports = userUtils;
