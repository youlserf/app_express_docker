import { ProductRouter } from "../components";
import { ClienteRouter } from "../components";

const listRoutes = [
  ["/product", ProductRouter],
  ["/cliente", ClienteRouter],
];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
