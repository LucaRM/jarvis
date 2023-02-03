import {injectable} from "inversify";

@injectable()
export class User {
  public isUserCreateRequest(stringToSearch: string): boolean {
    return true;
  }
}

export class xxx {
  public isUserCreateRequest(stringToSearch: string): boolean {
    return true;
  }
}

// TODO receber e parsear usuário e senha para criação de conta com email e senha
//TODO enviados por chat
