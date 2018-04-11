import IApp from "./App/IApp";
import container from "./Infrastructure/Installer";

let app = container.get<IApp>("IApp");
app.start();