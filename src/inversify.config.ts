import {Client} from "discord.js";
import {Container} from "inversify";
import "reflect-metadata";
import {Bot} from "./bot";
import {PingFinder} from "./services/finders/ping-finder/ping-finder";
import {TempRequestFinder} from "./services/finders/temp-request-finder/temp-request-finder";
import {UserCreateFinder} from "./services/finders/user-create-finder/user-create-finder";
import {MessageResponder} from "./services/message-responder";
import {TYPES} from "./types";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container
  .bind<string>(TYPES.TokenMeteum)
  .toConstantValue(process.env.TokenMeteum);
container
  .bind<string>(TYPES.TokenIqAir)
  .toConstantValue(process.env.TokenIqAir);
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container
  .bind<MessageResponder>(TYPES.MessageResponder)
  .to(MessageResponder)
  .inSingletonScope();
container.bind<PingFinder>(TYPES.PingFinder).to(PingFinder).inSingletonScope();
container
  .bind<UserCreateFinder>(TYPES.UserCreateFinder)
  .to(UserCreateFinder)
  .inSingletonScope();
container
  .bind<TempRequestFinder>(TYPES.TempRequestFinder)
  .to(TempRequestFinder)
  .inSingletonScope();

export default container;
