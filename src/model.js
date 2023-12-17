import { DataTypes, Model } from "sequelize";
import util from "util";
import connectToDB from "./db.js";

const db = await connectToDB("postgresql:///animals");

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
}

Human.init(
  {
    human_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    fname: {
      type: DataTypes.TEXT(50),
      allowNull: false,
    },
    lname: {
      type: DataTypes.TEXT(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT(100),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Human",
  }
);

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Animal.init(
  {
    animal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT(50),
      allowNull: false,
    },
    species: {
      type: DataTypes.TEXT(50),
      allowNull: false,
    },
    birth_year: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: "Animal",
  }
);

Human.hasMany(Animal, { foreignKey: "human_id" });
Animal.belongsTo(Human, { foreignKey: "human_id" });

export default db;
