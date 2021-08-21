import ExpressAdapter from "../../adapter/ExpressAdapter";
import LaunchController from "../../controller/LaunchController";
import express from 'express';
const app = express();
const port = 8080;

app.get('/', ExpressAdapter.create(LaunchController.getNextLaunch));

app.listen(process.env.PORT || 8080);