"use client";

export default function myImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: string;
  quality: number;
}) {
  if(src.startsWith("https://images.pexels.com")) return src;
  return `https://nextjsportfolio.com${src}?w=${width}&q=${quality || 75}`
}
