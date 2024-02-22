import { CHAR_ZERO_WIDTH_NOBREAK_SPACE } from "$std/path/_common/constants.ts";
import tmi from "npm:tmi.js";
import { StaticAuthProvider } from "npm:twitch-auth";

const twitchClientId = await Deno.env.get("TWITCH_APP_ID");
const authProvider = new StaticAuthProvider(twitchClientId!);
CHAR_ZERO_WIDTH_NOBREAK_SPACE;

const client = new tmi.Client({
  authProvider,
  channels: ["zeachco"],
});

client.connect();

client.on("connect", () => {
  console.log("Connected to Twitch");
});

client.on("message", (channel, tags, message, self) => {
  if (self || !message.startsWith("!")) return;

  const args = message.slice(1).split(" ");
  const command = args.shift().toLowerCase();

  if (command === "echo") {
    client.say(channel, `@${tags.username}, you said: "${args.join(" ")}"`);
  }
});

client.on("message", (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;

  if (message.toLowerCase() === "!hello") {
    // "@alca, heya!"
    client.say(channel, `@${tags.username}, heya!`);
  }
});

export function run() {
  console.log("Will trigger twitch bot.");
}
