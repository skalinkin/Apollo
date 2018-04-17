import {  inject,  injectable,  named} from "inversify";
import IApp from "../App/IApp";
import IStatusMonitor from "../App/IStatusMonitor";
import IServerConfig from "../App/IServerConfig";
import IServerRequestHandler from "../App/IServerRequestHandler";

var http = require('http');

@injectable()
class App implements IApp {
  private _monitor: IStatusMonitor;
  private _server: any;
  private _config: IServerConfig;
  private _reqHandler: IServerRequestHandler;

  constructor(@inject('IStatusMonitor') monitor: IStatusMonitor
               , @inject('IServerConfig') config: IServerConfig
               , @inject('IServerRequestHandler') serverRequestHandler: IServerRequestHandler) {
    
    this._monitor = monitor;
    this._reqHandler = serverRequestHandler;
    this._server = http.createServer();
    this._config = config;
  }
  
  start() {
    var port = this._config.getPort();
    
    this._server.listen(port, (err) => this._monitor.monitor(err));
    
    this._server.on('request', (req, res) => {
      this._reqHandler.handleRequest(req, res);
    });
  }
}

export default App;