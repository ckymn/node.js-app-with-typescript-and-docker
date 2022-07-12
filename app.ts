import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from "body-parser";
import config from 'config';
import Connect from "./connect";
import Routes from "./Routes"

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("TS App is Running");
});

const PORT = config.get('PORT') as number;
const HOST = config.get('HOST') as string;
const DB_URL = config.get('DB_URL') as string;

Connect(DB_URL);
Routes(app);

app.listen(PORT, HOST, () => {
    console.log(`server running at http://${HOST}:${PORT}`);
})