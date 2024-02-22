import { type Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  //@ts-ignore - daisyui is a 3rd party plugin
  plugins: [daisyui],
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;
