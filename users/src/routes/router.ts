import express from "express";

// Router Controllers
const controllers = {
    user: require('./../controller/user')
};

// Route Groups
const routes = {
    api: express.Router()
};

module.exports = (app:any) => {
    // routes.api.use();

    app.use('/', routes.api);
};