// components/blocks/ImageBlock.tsx
import Image from "next/image";

export default function ImageBlock({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} className="rounded-lg shadow-md max-w-full mx-auto" />;
}
