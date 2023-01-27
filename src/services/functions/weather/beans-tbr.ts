import {injectable} from "inversify";

@injectable()
export class TempRequestHandler {
  public fetchTempInfo(country: string): boolean {
    return true;
  }
}
