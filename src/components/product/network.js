import { Router } from "express";
import * as Controller from "./controller";

const productRouter = Router();

productRouter.route("/").get(Controller.findAll);
productRouter.route("/:id").get(Controller.findOne);
productRouter.route("/").post(Controller.create);
productRouter.route("/:id").put(Controller.update);
productRouter.route("/:id").delete(Controller.remove);
export default productRouter;