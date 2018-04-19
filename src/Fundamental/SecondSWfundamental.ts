import {  inject,  injectable,  named} from "inversify";
import Fundamental from "./Fundamental";

@injectable()
export default class SecondSWfundamental implements Fundamental {
  getTitle(): string{
    return "Ease of maintenance";
  };
  getDescription(){
    return "Ease of maintenance means designing for the maintenance programmer. Continually imagine the questions a maintenance programmer would ask about the code you're writing. Think of the maintenance programmer as your audience, and then design the system to be self-explanatory."
  };
}