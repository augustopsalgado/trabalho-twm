import Sequelize from "sequelize";

import config from '/home/augusto/twm/src/config/database';

import User from '/home/augusto/twm/src/models/user';

const models = [User];

class Database{
  constructor(){
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
    }
    init(){
      models.forEach((model) => model.init(this.connection));
    }
    associate(){
      models.forEach((model) => {
        if(model.associate){
          model.associate(this.connection.models);
        }

      }
      
      )
    }
}

export default new Database();