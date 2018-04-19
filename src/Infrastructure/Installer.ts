import "reflect-metadata";

import { Container } from "inversify";

import IApp from "../App/IApp";
import IErrorHandler from "../App/IErrorHandler";
import ILog from "../App/ILog";
import IServerConfig from "../App/IServerConfig";
import IStatusMonitor from "../App/IStatusMonitor";
import IServerRequestHandler from "../App/IServerRequestHandler";
import Fundamental from "../Fundamental/Fundamental";
import IFundamentals from "../Fundamental/IFundamentals";

import App from "../App.Impl/App";
import ErrorHandler from "../App.Impl/ErrorHandler";
import Log from "../App.Impl/Log";
import ServerConfig from "../App.Impl/ServerConfig";
import StatusMonitor from "../App.Impl/StatusMonitor";
import ServerRequestHandler from "../App.Impl/ServerRequestHandler";
import AvtecFundamentals from "../Fundamental/AvtecFundamentals";
import FundamentalsServerRequestHandler from "../Fundamental/FundamentalsServerRequestHandler";
import AvtecFirstFundamental from "../Fundamental/AvtecFirstFundamental";
import SecondSWfundamental from "../Fundamental/SecondSWfundamental";
import ThirdSWfundamental from "../Fundamental/ThirdSWfundamental";

let container = new Container();

container.bind<IApp>("IApp").to(App);
container.bind<IErrorHandler>("IErrorHandler").to(ErrorHandler);
container.bind<ILog>("ILog").to(Log);
container.bind<IServerConfig>("IServerConfig").to(ServerConfig);
container.bind<IStatusMonitor>("IStatusMonitor").to(StatusMonitor);
container.bind<IServerRequestHandler>("IServerRequestHandler").to(FundamentalsServerRequestHandler);
//container.bind<IServerRequestHandler>("IServerRequestHandler").to(ServerRequestHandler);
container.bind<IFundamentals>("IFundamentals").to(AvtecFundamentals);
container.bind<Fundamental>("Fundamental").to(AvtecFirstFundamental);
container.bind<Fundamental>("Fundamental").to(SecondSWfundamental);
container.bind<Fundamental>("Fundamental").to(ThirdSWfundamental);

export default container;