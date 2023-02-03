import {injectable} from "inversify";

@injectable()
export class FindEMail {
  public isUserCreateRequest(stringToSearch: string): boolean {
    return true;
  }
}

export class xxx {
  public isUserCreateRequest(stringToSearch: string): boolean {
    return true;
  }
}
