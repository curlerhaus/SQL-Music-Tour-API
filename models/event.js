"use strict";
const { Model } = require("sequelize");
const meetgreet = require("./meetgreet");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Stage, StageEvent, MeetGreet, SetTime }) {
      // stages
      Event.belongsToMany(Stage, {
        foreignKey: "event_id",
        as: "stages",
        through: StageEvent,
      });

      Event.hasMany(MeetGreet, {
        foreignKey: "event_id",
        as: "meet_greets",
      });

      Event.hasMany(SetTime, {
        foreignKey: "event_id",
        as: "set_times",
      });
    }
  }
  Event.init(
    {
      event_name: DataTypes.STRING,
      event_date: DataTypes.DATE,
      event_start_time: DataTypes.DATE,
      event_end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
