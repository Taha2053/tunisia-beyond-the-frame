"use client";

import Image from "next/image";
import { useState } from "react";
import type { StoryImage } from "@/data/stories";

export default function ThenNow({ thenImage, nowImage }: { thenImage: StoryImage; nowImage: StoryImage }) {
  const [position, setPosition] = useState(48);

  return <figure className="then-now">
    <div className="compare-stage">
      <Image src={thenImage.src} alt={thenImage.alt} fill sizes="(max-width: 800px) 100vw, 68vw" className="compare-image" />
      <div className="compare-now" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <Image src={nowImage.src} alt={nowImage.alt} fill sizes="(max-width: 800px) 100vw, 68vw" className="compare-image" />
      </div>
      <span className="compare-label then-label">1836 engraving</span><span className="compare-label now-label">Carthage today</span>
      <div className="compare-rule" style={{ left: `${position}%` }} aria-hidden="true"><i /></div>
      <input aria-label="Compare the 1836 engraving with Carthage today" type="range" min="8" max="92" value={position} onChange={(event) => setPosition(Number(event.target.value))} />
    </div>
    <figcaption><span>{thenImage.credit}</span><span>{nowImage.credit}</span></figcaption>
  </figure>;
}
