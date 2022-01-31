const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
    createAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
  });

  return User;
};

module.exports = User;