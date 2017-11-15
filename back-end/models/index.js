const Sequelize = require('sequelize');
const keys = require('../config/env');
const user_name = keys.dbUsername;

const sequelize = new Sequelize(process.env.DATABASE_URL || `postgres://${user_name}@localhost:5432/swipebite`);

// EXPORTS MODELS AND SEQUELIZE FOR DB SETUP
module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;

// IMPORT DB MODELS
const User = sequelize.import('./user');
const Restaurant = sequelize.import('./restaurant');
const Food = sequelize.import('./food.js');
const UserFood = sequelize.import('./userFood');

// DB RELATIONSHIPS
	//not currently making this relationship
Food.belongsTo(User);
User.hasMany(Food);

// Food.belongsTo(Restaurant);
// Restaurant.hasMany(Food);

// User.hasMany(UserRestaurant);
// UserRestaurant.hasMany(User);

// Restaurant.hasMany(UserRestaurant);
// UserRestaurant.hasMany(Restaurant);

module.exports.models = {
	User : User,
	Restaurant: Restaurant,
	Food: Food,
	UserFood: UserFood
};