'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    account: DataTypes.STRING,
    cover: DataTypes.STRING,
    avatar: DataTypes.STRING,
    introduction: DataTypes.TEXT,
    role: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Tweet)
    User.hasMany(models.Reply)
    User.hasMany(models.Like)
    User.belongsToMany(User, {
      through: models.Followship,
      foreignKey: 'followerId',
      as: 'Followings'
    })
    User.belongsToMany(models.Reply, {
      through: models.Like,
      foreignKey: 'UserId',
      as: 'LikedReplies'
    })
  };
  return User;
};