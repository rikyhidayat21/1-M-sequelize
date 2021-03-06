'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pokemon.belongsTo(models.Pokeball, { foreignKey: 'PokeballId'})
      Pokemon.belongsTo(models.Trainer, {foreignKey: 'TrainerId'})
    }
  };
  Pokemon.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    PokeballId: DataTypes.INTEGER,
    TrainerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};