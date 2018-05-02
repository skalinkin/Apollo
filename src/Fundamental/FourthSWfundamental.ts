import {  inject,  injectable,  named} from "inversify";
import Fundamental from "./Fundamental";

@injectable()
export default class FourthSWfundamental implements Fundamental {
  getTitle(): string{
    return "Extensibility";
  };
  getDescription(){
    return "Extensibility means that you can enhance a system without causing violence to the underlying structure. You can change a piece of a system without affecting other pieces. The most likely changes cause the system the least trauma."
  };
}