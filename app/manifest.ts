import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr Saeed Ahmad",
    short_name: "Saeed Ahmad",
    description: "It is Dr. M.Saeed PHD Portfolio Site",
    start_url: "/",
    display: "standalone",
    dir: "ltr",
    lang: "en",
    orientation: "any",
    background_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/Saeed_pic.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/Saeed_144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },

      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
