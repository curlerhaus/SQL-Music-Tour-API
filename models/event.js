"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event.init(
    {
      event_name: DataTypes.STRING,
      event_date: DataTypes.DATE,
      event_start_time: DataTypes.DATE,
      event_end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
