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
    verificationCode: {
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
  VerificationCode.prototype.validCode = function (verificationCode) {
    return bcrypt.compareSync(verificationCode, this.verificationCode);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  VerificationCode.addHook('beforeCreate', (verificationCode) => {
    verificationCode.verificationCode = bcrypt.hashSync(
      verificationCode.verificationCode,
      bcrypt.genSaltSync(10),
      null,
    );
  });

  return VerificationCode;
};
