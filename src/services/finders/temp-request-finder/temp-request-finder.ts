import {injectable} from "inversify";

@injectable()
export class TempRequestFinder {
  private regexp = [
    "qual a temperatura?",
    "qual a temperatura de hoje",
    "vai fazer calor hoje?",
    "vai fazer frio hoje?",
  ];

  public isTempRequest(stringToSearch: string): boolean {
    return this.regexp.indexOf(stringToSearch.toLowerCase()) !== -1;
  }
}
