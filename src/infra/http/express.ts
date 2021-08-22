import ExpressAdapter from "../../adapter/ExpressAdapter";
import LaunchController from "../../controller/LaunchController";
import express from 'express';
const app = express();

app.get('/launchs/next', ExpressAdapter.create(LaunchController.getNextLaunch));
app.get('/launchs/latest', ExpressAdapter.create(LaunchController.getLatestLaunch));

app.listen(process.env.PORT || 8080);