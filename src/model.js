import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    return `${this.fname} ${this.lname}`
  }
}

Human.init({
  human_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  fname:{
    type: DataTypes.VARCHAR(50),
    allowNull: false,
  },
  lname: {
    type: DataTypes.VARCHAR(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.VARCHAR(100),
    allowNull: false,
  }
})

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();

  }
}

Animal.init({
  animal_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: false,
  },
  name:{
    type: DataTypes.VARCHAR(50),
    allowNull:false
  },
  species:{
    type: DataTypes.VARCHAR(50),
    allowNull: false,
  },
  birth_year:{
    type: DataTypes.INTEGER
  }

})

Human.hasMany(Animal, { foreignKey: 'human_id' });
Animal.belongsTo(Human, { foreignKey: 'human_id' });

export default db;
