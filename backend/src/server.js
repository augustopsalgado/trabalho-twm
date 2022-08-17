import "dotenv/config";

import "./database/seeders";

import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import express from "express";

import User from "./models/user";

AdminJS.registerAdapter(AdminJSSequelize);
const app = express();

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [User],

});

const router = AdminJSExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);
app.listen(4000, () => {
    console.log("AdminJS is under http://localhost:4000/admin");

}

);