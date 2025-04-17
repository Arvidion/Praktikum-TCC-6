import {Sequelize} from "sequelize";

const db = new Sequelize('RECOVER_YOUR_DATA','root','',{
    host: "34.133.56.122",
    dialect: 'mysql'
});

export default db;
