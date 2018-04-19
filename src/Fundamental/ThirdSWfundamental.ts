import {  inject,  injectable,  named} from "inversify";
import Fundamental from "./Fundamental";

@injectable()
export default class ThirdSWfundamental implements Fundamental {
  getTitle(): string{
    return "Loose coupling";
  };
  getDescription(){
    return "Loose coupling means designing so that you hold connections among different parts of a program to a minimum. Use the principles of good abstractions in class interfaces, encapsulation, and information hiding to design classes with as few interconnections as possible. Minimal connectedness minimizes work during integration, testing, and maintenance."
  };
}