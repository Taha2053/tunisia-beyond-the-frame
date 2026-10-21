"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { StoryImage } from "@/data/stories";

export default function ThenNow({ thenImage, nowImage }: { thenImage: StoryImage; nowImage: StoryImage }) {
  const [position, setPosition] = useState(48);
  const { dict } = useLanguage();

  return (
    <figure className="then-now" dir="ltr">
      <div className="compare-stage">
        <Image
          src={thenImage.src}
          alt={thenImage.alt}
          fill
          sizes="(max-width: 800px) 100vw, 68vw"
          className="compare-image"
        />
        <div className="compare-now" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <Image
            src={nowImage.src}
            alt={nowImage.alt}
            fill
            sizes="(max-width: 800px) 100vw, 68vw"
            className="compare-image"
          />
        </div>
        <span className="compare-label then-label">{dict.ancient.engravingLabel}</span>
        <span className="compare-label now-label">{dict.ancient.carthageTodayLabel}</span>
        <div className="compare-rule" style={{ left: `${position}%` }} aria-hidden="true">
          <i />
        </div>
        <input
          aria-label={dict.ancient.compareDesc}
          aria-valuemin={8}
          aria-valuemax={92}
          aria-valuenow={position}
          aria-valuetext={`${position}%`}
          type="range"
          min="8"
          max="92"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>
      <figcaption>
        <span>{thenImage.credit}</span>
        <span>{nowImage.credit}</span>
      </figcaption>
    </figure>
  );
}
