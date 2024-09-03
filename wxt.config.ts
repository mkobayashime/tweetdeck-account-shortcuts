import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "TweetDeck Account Shortcuts",
    version: "3.0.0",
    description:
      "Add keyboard shortcuts to quickly select account to tweet from in TweetDeck",
    icons: {
      "16": "icon/icon_16.png",
      "128": "icon/icon_128.png",
    },
  },
});
