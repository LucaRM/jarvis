require("dotenv").config(); // Recommended way of loading dotenv
import {Bot} from "./bot";
import container from "./inversify.config";
import {TYPES} from "./types";
let bot = container.get<Bot>(TYPES.Bot);
bot
  .listen()
  .then(() => {
    console.log("Logged in!");
  })
  .catch((error) => {
    console.log("Oh no! ", error);
  });
