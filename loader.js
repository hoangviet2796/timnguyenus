import prefix from "./prefix";

export default function myImageLoader({ src, width, quality }) {
  return `https://hoangviet2796.github.io/timnguyenus${src}?w=${width}&q=${
    quality || 75
  }`;
}
