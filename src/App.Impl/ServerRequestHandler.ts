import { inject, injectable, named } from "inversify";
import IServerRequestHandler from "../App/IServerRequestHandler";

@injectable()
export default class ServerRequestHandler implements IServerRequestHandler{
  handleRequest(request, response) {
      response.writeHead(200, {
        'Content-Type': 'text/plain',
        'X-Powered-By': 'Coffee'
      });
      response.end('Hello World\n');
  }
}