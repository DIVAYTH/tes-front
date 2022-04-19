import {Request} from "./request";

export class RequestDecision {
  request:Request
  decision:string
  rang:string

  constructor(request: Request, decision: string, rang: string) {
    this.request = request;
    this.decision = decision;
    this.rang = rang;
  }
}
