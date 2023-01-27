import {injectable} from "inversify";

@injectable()
export class TempRequestFinder {
  private regexp = [
    "vai fazer calor hoje?",
    "vai fazer frio hoje?",
    "temperatura de hoje",
  ];

  public isTempRequest(stringToSearch: string): boolean {
    return this.regexp.indexOf(stringToSearch.toLowerCase()) !== -1;
  }
}
