import ExpressAdapter from "../../adapter/ExpressAdapter";
import LaunchController from "../../controller/LaunchController";
import express from 'express';
const app = express();
const port = 8080;


app.get('/', ExpressAdapter.create(LaunchController.getNextLaunch));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});