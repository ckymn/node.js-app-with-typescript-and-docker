import { Application } from "express";
import UserController from "./controllers/User.controller";

export default (app: Application) => {
    app.post("api/user", async (req, res) => {
        const user = await UserController.CreateUser({ ...req.body })
        return res.send({ user })
    })
}