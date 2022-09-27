"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate({ Band, Event }) {
      // band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band",
      });

      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event",
      });
    }
  }
  MeetGreet.init(
    {
      event_id: DataTypes.SMALLINT,
      band_id: DataTypes.SMALLINT,
      meet_start_time: DataTypes.DATE,
      meet_end_time: DataTypes.DATE,
      meet_greet_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MeetGreet",
    }
  );
  return MeetGreet;
};
