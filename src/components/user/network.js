import { Router } from "express";
import * as Controller from "./controller";

const clienteRouter = Router();

clienteRouter.route("/").get(Controller.findAll);
clienteRouter.route("/:id").get(Controller.findOne);
clienteRouter.route("/").post(Controller.create);
clienteRouter.route("/:id").put(Controller.update);
clienteRouter.route("/:id").delete(Controller.remove);
export default clienteRouter;