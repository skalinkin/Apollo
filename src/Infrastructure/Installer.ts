import "reflect-metadata";

import { Container } from "inversify";

import IApp from "../App/IApp";

import App from "../App.Impl/App";

let container = new Container();

container.bind<IApp>("IApp").to(App);

export default container;