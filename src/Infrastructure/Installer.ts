import "reflect-metadata";

import { Container } from "inversify";

import IApp from "../App/IApp";
import IErrorHandler from "../App/IErrorHandler";
import ILog from "../App/ILog";
import IServerConfig from "../App/IServerConfig";
import IStatusMonitor from "../App/IStatusMonitor";
import IServerRequestHandler from "../App/IServerRequestHandler";

import App from "../App.Impl/App";
import ErrorHandler from "../App.Impl/ErrorHandler";
import Log from "../App.Impl/Log";
import ServerConfig from "../App.Impl/ServerConfig";
import StatusMonitor from "../App.Impl/StatusMonitor";
import ServerRequestHandler from "../App.Impl/ServerRequestHandler";

let container = new Container();

container.bind<IApp>("IApp").to(App);
container.bind<IErrorHandler>("IErrorHandler").to(ErrorHandler);
container.bind<ILog>("ILog").to(Log);
container.bind<IServerConfig>("IServerConfig").to(ServerConfig);
container.bind<IStatusMonitor>("IStatusMonitor").to(StatusMonitor);
container.bind<IServerRequestHandler>("IServerRequestHandler").to(ServerRequestHandler);

export default container;