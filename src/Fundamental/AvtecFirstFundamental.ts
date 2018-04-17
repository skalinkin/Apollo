import {  inject,  injectable,  named} from "inversify";
import Fundamental from "./Fundamental";

@injectable()
export default class AvtecFirstFundamental implements Fundamental {
  getTitle(): string{
    return "Minimal complexity";
  };
  getDescription(){
    return "The primary goal of design should be to minimize complexity for all the reasons just described (edit: What \"reasons just described\"?  Read Chapter 5 of Code Complete 2, included below as an attachment to this Wiki Page!). Avoid making \"clever\" designs. Clever designs are usually hard to understand. Instead make \"simple\" and \"easy-to-understand\" designs.  If your design doesn't let you safely ignore most other parts of the program when you’re immersed in one specific part, the design isn't doing its job.";
  };
}