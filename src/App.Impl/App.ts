import { inject, injectable, named } from "inversify";
import IApp from "../App/IApp";

@injectable()
class App implements IApp{
  start(){
    
  }
}

export default App;