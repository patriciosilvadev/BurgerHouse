require('dotenv').config()
module.exports = {
    dialect: 'mysql',
    host: 'bootwhatsapp.cwdkivtj8ka1.sa-east-1.rds.amazonaws.com',
    username: 'dev',
    password: 'secret(!#)123TECH',
    database: process.env.DATABASE_NAME,

}
