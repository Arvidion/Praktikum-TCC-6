import {Sequelize} from "sequelize";

const db = new Sequelize('havas','root','',{
    host: "104.197.117.136",
    dialect: 'mysql'
});

export default db;
