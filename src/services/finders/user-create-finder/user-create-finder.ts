import {injectable} from "inversify";

@injectable()
export class UserCreateFinder {
  private regexp = ["crie usuário"];

  public isUserCreateRequest(stringToSearch: string): boolean {
    return this.regexp.indexOf(stringToSearch.toLowerCase()) !== -1;
  }
}
