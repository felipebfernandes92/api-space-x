import ExpressAdapter from "../../adapter/ExpressAdapter";
import LaunchController from "../../controller/LaunchController";
import express from 'express';
const app = express();

app.get('/launches/next', ExpressAdapter.create(LaunchController.getNextLaunch));
app.get('/launches/latest', ExpressAdapter.create(LaunchController.getLatestLaunch));
app.get('/launches/upcoming', ExpressAdapter.create(LaunchController.getUpcomingLaunches));
app.get('/launches/past', ExpressAdapter.create(LaunchController.getPastLaunches));

app.listen(process.env.PORT || 8080);