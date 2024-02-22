import { ConnectedUsers } from "../islands/ConnectedUsers.tsx";

const twitchKey = Deno.env.get("TWITCH_KEY");

export default function HomePage() {
  return (
    <div class="p-2 bg-base-200 h-screen flex">
      <div class="container">
        <h1 class="text-4xl font-bold">Qu'est-ce qu'on fait?</h1>
        <ol>
          <li>Setup with twitch API</li>
          <li>Integrate chat into view</li>
        </ol>
      </div>
      <div class="container">
        <ConnectedUsers />
      </div>
    </div>
  );
}
