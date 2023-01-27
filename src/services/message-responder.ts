import {Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {addUser} from "./api/user/createUser";
import {PingFinder} from "./finders/ping-finder/ping-finder";
import {TempRequestFinder} from "./finders/temp-request-finder/temp-request-finder";
import {UserCreateFinder} from "./finders/user-create-finder/user-create-finder";

@injectable()
export class MessageResponder {
  private pingFinder: PingFinder;
  private tempRequestFinder: TempRequestFinder;
  private userCreateFinder: UserCreateFinder;

  constructor(
    @inject(TYPES.PingFinder) pingFinder: PingFinder,
    @inject(TYPES.TempRequestFinder) tempRequestFinder: TempRequestFinder,
    @inject(TYPES.UserCreateFinder) userCreateFinder: UserCreateFinder
  ) {
    this.pingFinder = pingFinder;
    this.tempRequestFinder = tempRequestFinder;
    this.userCreateFinder = userCreateFinder;
  }

  async handle(message: Message): Promise<Message | Message[]> {
    let email = "teste@teste.com";
    let password = "teste01";

    if (this.pingFinder.isPing(message.content)) {
      //If the message is a Ping
      return message.reply("pong!");
    }

    if (this.tempRequestFinder.isTempRequest(message.content)) {
      //If the message is a temperature request
      return message.reply("Correct coding.");
    }

    if (this.userCreateFinder.isUserCreateRequest(message.content)) {
      //If the message is a user creation request
      await addUser(email, password);
      return message.reply("User created!.");
    }

    return Promise.reject();
  }
}
