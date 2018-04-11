import { inject, injectable, named } from "inversify";
import ILog from "../App/ILog"

@injectable()
export default class Log implements ILog{
    info(message: string) {
        console.log(message);
    }
    return;
  }