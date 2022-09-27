"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    static associate({ Band, Event, Stage }) {
      //band
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band",
      });

      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event",
      });
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage",
      });
    }
  }
  SetTime.init(
    {
      event_id: DataTypes.SMALLINT,
      stage_id: DataTypes.SMALLINT,
      band_id: DataTypes.SMALLINT,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
      set_time_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "set_time",
    }
  );
  return SetTime;
};
