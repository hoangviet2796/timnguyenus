import prefix from "./prefix";

export default function myImageLoader({ src, width, quality }) {
  return `https://${prefix}/${src}?w=${width}&q=${quality || 75}`;
}