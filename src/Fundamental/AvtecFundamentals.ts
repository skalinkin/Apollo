import {  inject,  injectable,  named, multiInject} from "inversify";
import IFundamentals from "./IFundamentals";
import Fundamental from "./Fundamental";

@injectable()
export default class AvtecFundamentals implements IFundamentals {
  private fundamentals : Fundamental[];
  constructor(@multiInject("Fundamental") args: Fundamental[]){
    this.fundamentals = args;
  }
  getAll() {
    return this.fundamentals;
  }
}