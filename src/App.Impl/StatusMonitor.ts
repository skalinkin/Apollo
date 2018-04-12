import {  inject,  injectable,  named} from "inversify";
import IStatusMonitor from "../App/IStatusMonitor";
import ILog from "../App/ILog";
import IErrorHandler from "../App/IErrorHandler";

@injectable()
export default class StatusMonitor implements IStatusMonitor {
  private _logger: ILog;
  private _errorHandler: IErrorHandler;

  constructor(@inject('ILog') logger: ILog, @inject('IErrorHandler') errorHandler: IErrorHandler) {
    this._logger = logger;
    this._errorHandler = errorHandler;
  }
  monitor(err: object) {
    if (err) {
      this._errorHandler.handle(err);
    } else
      this._logger.info("Server Started");
  }
}