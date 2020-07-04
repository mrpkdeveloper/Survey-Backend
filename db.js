const sequelize = require('sequelize')

const db = new sequelize('testdb', 'tester', 'testpass', {      //database  username password
    host: 'localhost',
    dialect: 'mysql',                                            //which dbms using 
    pool: {
        min: 0,
        max: 5
    }
})

const surveyinfo = db.define('surveyinfo', {
    id: {
        type: sequelize.INTEGER,
        // allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    age: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    rate: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    feedback: {
        type: sequelize.STRING,
        allowNull: false,
    },
})
db.sync()
    .then(() => console.log('database synced successfully'))
    .catch((err) => console.error("error in creating database"))

exports = module.exports = {
    db, surveyinfo
}

