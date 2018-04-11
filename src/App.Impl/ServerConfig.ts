import { inject, injectable, named } from "inversify";
import IServerConfig from "../App/IServerConfig";

@injectable()
export default class ServerConfig implements IServerConfig{
  getPort(){
    let fromEnv = Number(process.env.PORT);
    let port = fromEnv || 3000;
    return port;
  }
}