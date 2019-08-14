import operationRouter from "./operationRouter";
import maintenanceRouter from "./maintenanceRouter";
import structRouter from "./structRouter";

var routes = [];

routes = Array.prototype.concat.apply(routes, operationRouter);
routes = Array.prototype.concat.apply(routes, maintenanceRouter);
routes = Array.prototype.concat.apply(routes, structRouter);

export default routes;
