"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const inversify_1 = require("inversify");
require("reflect-metadata");
const bot_1 = require("./bot");
const ping_finder_1 = require("./services/finders/ping-finder/ping-finder");
const temp_request_finder_1 = require("./services/finders/temp-request-finder/temp-request-finder");
const message_responder_1 = require("./services/message-responder");
const types_1 = require("./types");
let container = new inversify_1.Container();
container.bind(types_1.TYPES.Bot).to(bot_1.Bot).inSingletonScope();
container.bind(types_1.TYPES.Client).toConstantValue(new discord_js_1.Client());
container
    .bind(types_1.TYPES.TokenMeteum)
    .toConstantValue(process.env.TokenMeteum);
container.bind(types_1.TYPES.Token).toConstantValue(process.env.TOKEN);
container
    .bind(types_1.TYPES.MessageResponder)
    .to(message_responder_1.MessageResponder)
    .inSingletonScope();
container.bind(types_1.TYPES.PingFinder).to(ping_finder_1.PingFinder).inSingletonScope();
container
    .bind(types_1.TYPES.TempRequestFinder)
    .to(temp_request_finder_1.TempRequestFinder)
    .inSingletonScope();
exports.default = container;
//# sourceMappingURL=inversify.config.js.map