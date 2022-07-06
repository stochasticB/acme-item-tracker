const { conn } = require('./conn');
const { Thing } = require('./Thing');
const { STRING } = conn.Sequelize;

const User = conn.define('user', {
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

Thing.belongsTo(User);
User.hasMany(Thing);

module.exports = {
    User
};