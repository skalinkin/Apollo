import {  inject,  injectable,  named} from "inversify";
import Fundamental from "./Fundamental";

@injectable()
export default class FifthSWfundamental implements Fundamental {
  getTitle(): string{
    return "Reusability";
  };
  getDescription(){
    return "Reusability means designing the system so that you can reuse pieces of it in other systems."
  };
}