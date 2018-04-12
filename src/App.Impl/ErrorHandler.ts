import { inject, injectable, named } from "inversify";
import IErrorHandler from "../App/IErrorHandler";

@injectable()
class ErrorHandler implements IErrorHandler{
  handle(err: object){
    
  }
}

export default ErrorHandler;