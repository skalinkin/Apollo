import {  inject,  injectable,  named} from "inversify";
import IApp from "../App/IApp";
import IStatusMonitor from "../App/IStatusMonitor";
import IServerConfig from "../App/IServerConfig";
var http = require('http');

@injectable()
class App implements IApp {
  private _monitor: IStatusMonitor;
  private _server: any;
  private _config: IServerConfig;
  
  constructor(@inject('IStatusMonitor') monitor: IStatusMonitor
            , @inject('IServerConfig') config: IServerConfig) {
    this._monitor = monitor;
    this._server = http.createServer();
    this._config = config;
  }
  start() {
    var port = this._config.getPort();
    this._server.listen(port, (err) => this._monitor.monitor(err));
  }
}

export default App;