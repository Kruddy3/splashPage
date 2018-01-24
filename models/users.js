
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique:true,
      validate: {
        isEmail: {
          args: true,
          msg: 'The email you entered is invalid or is already in our system.'
        },
      },
    },
    userType: DataTypes.INTEGER,
    reference: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return users;
};
