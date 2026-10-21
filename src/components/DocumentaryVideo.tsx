"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { StoryVideo } from "@/data/stories";

export default function DocumentaryVideo({ video, poster }: { video: StoryVideo; poster: string }) {
  const [showTranscript, setShowTranscript] = useState(false);
  const { dict, language } = useLanguage();

  return (
    <figure className="documentary">
      <video controls preload="none" poster={poster} playsInline key={`${video.src}-${language}`}>
        <source src={video.src} type="video/mp4" />
        <track kind="captions" src={video.captions} srcLang={language} label={video.language} default />
        {dict.docVideo.browserWarning}
      </video>
      <figcaption>
        <div>
          <strong>{video.title}</strong>
          <span>{video.language} · {video.credit}</span>
        </div>
        <button
          type="button"
          aria-expanded={showTranscript}
          aria-controls={`transcript-${video.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          onClick={() => setShowTranscript(!showTranscript)}
        >
          {showTranscript ? dict.docVideo.hideTranscript : dict.docVideo.readTranscript}
        </button>
      </figcaption>
      {showTranscript && (
        <div
          id={`transcript-${video.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          className="video-transcript"
        >
          <h4>{dict.docVideo.transcriptHeading}</h4>
          <p>{video.transcript}</p>
          <p className="transcript-note">{dict.docVideo.transcriptNote}</p>
        </div>
      )}
    </figure>
  );
}
