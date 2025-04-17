import {Sequelize} from "sequelize";

const db = new Sequelize('RECOVER_YOUR_DATA','root','',{
    host: "34.46.200.135",
    dialect: 'mysql'
});

export default db;
