import type { ImageProps as NextImageProps, StaticImageData } from "next/image";
import NextImage from "next/image";

export interface ImageProps
  extends Omit<
    NextImageProps,
    "src" | "alt" | "width" | "height" | "className"
  > {
  src: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}
// Backend origin whose static uploads are served with a
// Cross-Origin-Resource-Policy header. Strip it so the image loads
// same-origin through the /uploads proxy (see next.config.ts rewrites).
const BACKEND_ORIGIN = "https://survey.afaaqware.com";

export default function Image({
  src,
  alt = "",
  width = 100,
  height = 100,
  className,
  ...rest
}: ImageProps) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith(BACKEND_ORIGIN)
      ? src.slice(BACKEND_ORIGIN.length) // -> "/uploads/..."
      : src;
  // Plain <img> for any string URL (absolute external or same-origin/proxied).
  // Static imports (StaticImageData objects) still go through next/image.
  if (typeof resolvedSrc === "string") {
    return (
      <img
        src={resolvedSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        {...rest}
      />
    );
  }

  return (
    <NextImage
      src={resolvedSrc}
      alt={alt}
      width={rest.fill ? undefined : (width ?? 100)}
      height={rest.fill ? undefined : (height ?? 100)}
      className={className}
      {...rest}
    />
  );
}
