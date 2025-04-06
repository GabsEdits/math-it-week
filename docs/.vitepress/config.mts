import { defineConfig } from "vitepress";
import { imgMark } from "@mdit/plugin-img-mark";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Math & IT Week",
  description: "The website where I present crazy stuff from a random poster for Math & IT Week",

  themeConfig: {
    minimal: true,
    author: "Gabriel Cozma",
    nav: {
      show: false,
    },
    footer: {
      copyright: true,
      poweredBy: true,

      madeby: {
        show: false,
        name: "Gabs",
        link: "https://gxbs.dev",
      },

      copyleft: {
        show: false,
        license: "GPL-3.0 License",
        info: "https://www.gnu.org/licenses/gpl-3.0.html",
      },
    },
  },

  markdown: {
    config: (md) => {
      md.use(imgMark);
    },
  },

  head: [
    ["meta", {
      name: "author",
      content: "Gabriel Cozma",
    }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],

    // Open Graph / Facebook
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:title", content: "Math & IT Week" }],
    ["meta", { name: "og:locale", content: "en_US" }],
    ["meta", { name: "og:type", content: "website" }],

    // Twitter / X
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Math & IT Week" }],
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "sass:color";
          $color-accent: #00FF00;
          $bg-color-l: color.scale($color-accent, $lightness: 90%, $saturation: -85%);
          `,
        },
      },
    },
  },
});
