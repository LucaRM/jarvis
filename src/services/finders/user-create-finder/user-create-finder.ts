import {injectable} from "inversify";

@injectable()
export class UserCreateFinder {
  private regexp = ["crie usuário", "crie um usuário"];

  public isUserCreateRequest(stringToSearch: string): boolean {
    return this.regexp.indexOf(stringToSearch.toLowerCase()) !== -1;
  }
}
