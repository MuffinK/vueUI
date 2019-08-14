import operationRouter from "./operationRouter";
import maintenanceRouter from "./maintenanceRouter";

var routes = [];

routes = Array.prototype.concat.apply(routes, operationRouter);
routes = Array.prototype.concat.apply(routes, maintenanceRouter);

export default routes;
