import Image from "next/image";

interface DivImageProps {
  src: string;
  sizes: string;
  alt: string;
  dimension: string;
  rounded?: string;
}

export default function DivImage({
  sizes,
  src,
  alt,
  dimension,
  rounded,
}: DivImageProps) {
  return (
    <div className={`relative ${dimension} ${rounded}`}>
      <Image
        fill
        sizes={sizes}
        src={src}
        alt={alt}
        className={`${rounded}`}
        style={{ objectFit: "cover" }}
      ></Image>
    </div>
  );
}
