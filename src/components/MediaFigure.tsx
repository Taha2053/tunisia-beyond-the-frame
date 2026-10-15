import Image from "next/image";
import type { StoryImage } from "@/data/stories";

export default function MediaFigure({ image, className = "", sizes = "(max-width: 800px) 100vw, 50vw", priority = false }: { image: StoryImage; className?: string; sizes?: string; priority?: boolean }) {
  return <figure className={`media-figure ${className}`}>
    <div className="media-frame"><Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} /></div>
    <figcaption>{image.credit}</figcaption>
  </figure>;
}
