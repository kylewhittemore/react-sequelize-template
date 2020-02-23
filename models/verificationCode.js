const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
  const VerificationCode = sequelize.define('VerificationCode', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  VerificationCode.associate = function (models) {
    VerificationCode.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  // Creating a custom method for our User model. This will check if an unhashed
  // password entered by the user can be compared to the hashed password stored in our database
  VerificationCode.prototype.validateCode = function (code, email) {
    console.log(code, email);
    return bcrypt.compareSync(code, this.code) && email === this.email;
  };

  VerificationCode.addHook('beforeCreate', (verificationCode) => {
    verificationCode.code = bcrypt.hashSync(
      verificationCode.code.toString(),
      bcrypt.genSaltSync(10),
      null,
    );
  });

  return VerificationCode;
};
