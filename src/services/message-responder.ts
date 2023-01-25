import {Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {PingFinder} from "./finders/ping-finder/ping-finder";
import {TempRequestFinder} from "./finders/temp-request-finder/temp-request-finder";

@injectable()
export class MessageResponder {
  private pingFinder: PingFinder;
  private tempRequestFinder: TempRequestFinder;

  constructor(
    @inject(TYPES.PingFinder) pingFinder: PingFinder,
    @inject(TYPES.TempRequestFinder) tempRequestFinder: TempRequestFinder
  ) {
    this.pingFinder = pingFinder;
    this.tempRequestFinder = tempRequestFinder;
  }

  handle(message: Message): Promise<Message | Message[]> {
    if (this.pingFinder.isPing(message.content)) {
      //If the message is a Ping
      return message.reply("pong!");
    }

    if (this.tempRequestFinder.isTempRequest(message.content)) {
      //If the message is a temperature request
      return message.reply("Correct coding.");
    }

    return Promise.reject();
  }
}
