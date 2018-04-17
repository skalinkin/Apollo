import {
  inject,
  injectable,
  named
} from "inversify";
import IServerRequestHandler from "../App/IServerRequestHandler";
import IFundamentals from "../Fundamental/IFundamentals";

@injectable()
export default class FundamentalsServerRequestHandler implements IServerRequestHandler {
  private _fundamentalsRepository: IFundamentals;
  constructor(@inject("IFundamentals") repo: IFundamentals) {
    this._fundamentalsRepository = repo;
  }
  handleRequest(request, response) {
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'X-Powered-By': 'Coffee'
    });

    let fundamentals = this._fundamentalsRepository.getAll();
    response.write("<html>");
    response.write("</html>");
    response.write("<body>");
    response.write("<h1>Avtec Software Fundamentals</h1>");
    for (let fundamental of fundamentals) {
      response.write("<div>");
      response.write("<h2>");
      response.write(fundamental.getTitle());
      response.write("</h2>");
      response.write("<p>");
      response.write(fundamental.getDescription());
      response.write("</p>");
      response.write("</div>");
    }
    response.write("</body>");
    response.end();
  }
}