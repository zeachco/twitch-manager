const twitchKey = Deno.env.get("TWITCH_KEY");

export default function HomePage() {
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col">
        <h1 class="text-4xl font-bold">Twitch board</h1>
        <ol>
          <li>Setup with twitch API</li>
          <li>Integrate chat into view</li>
        </ol>
      </div>
    </div>
  );
}
